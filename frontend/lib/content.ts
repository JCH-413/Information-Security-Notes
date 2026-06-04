import fs from "node:fs";
import path from "node:path";
import type { Lecture, Topic, NavLecture } from "./types";
import { lectureSources, type LectureSource } from "@/data/lectures";

/**
 * Parses the study-note HTML files into the app's lecture/topic model.
 *
 * Each file follows the same template: a series of `<section id="...">` blocks,
 * each opening with a `.section-header` (number + <h2> title). We keep the rich
 * body of every section as HTML and render it under our own light theme (see
 * `app/content.css`), dropping the source's dark-theme chrome (top bar, hero,
 * table of contents, scroll-to-top).
 *
 * Runs at build time only — these pages are statically generated.
 */

const CONTENT_DIR = path.join(process.cwd(), "content");

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

function decodeEntities(s: string): string {
  return s.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, (m) => ENTITIES[m] ?? m);
}

function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&[a-z0-9#]+;/g, " ")
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

const SECTION_RE = /<section id="([^"]+)">([\s\S]*?)<\/section>/g;
const HEADER_RE = /<div class="section-header">[\s\S]*?<\/div>/;
const TITLE_RE = /<h2>([\s\S]*?)<\/h2>/;

function parseLecture(source: LectureSource): Lecture {
  const html = fs.readFileSync(path.join(CONTENT_DIR, source.file), "utf8");

  // First pass: pull out each section's id, title and body.
  const raw: { oldId: string; slug: string; title: string; body: string }[] = [];
  const usedSlugs = new Set<string>();

  for (const match of html.matchAll(SECTION_RE)) {
    const [, oldId, sectionHtml] = match;
    const titleMatch = sectionHtml.match(TITLE_RE);
    if (!titleMatch) continue;

    const title = stripTags(titleMatch[1]);
    const body = sectionHtml.replace(HEADER_RE, "").trim();

    let slug = slugify(title) || oldId;
    while (usedSlugs.has(slug)) slug = `${slug}-2`;
    usedSlugs.add(slug);

    raw.push({ oldId, slug, title, body });
  }

  // Second pass: rewrite any in-content anchors (#s1, #qr, …) to the new slugs.
  const anchorMap = new Map(raw.map((r) => [r.oldId, r.slug]));
  const topics: Topic[] = raw.map((r, i) => {
    let content = r.body;
    for (const [oldId, slug] of anchorMap) {
      content = content.replaceAll(`href="#${oldId}"`, `href="#${slug}"`);
    }
    return { id: `${source.id}-${i + 1}`, slug: r.slug, title: r.title, content };
  });

  return {
    id: source.id,
    slug: source.slug,
    title: source.title,
    description: source.description,
    videos: source.videos,
    topics,
  };
}

/** All lectures, in the order declared in `data/lectures.ts`. */
export const lectures: Lecture[] = lectureSources.map(parseLecture);

export function getLectureBySlug(slug: string): Lecture | undefined {
  return lectures.find((lecture) => lecture.slug === slug);
}

/** Trimmed structure for the client sidebar — no heavy topic HTML. */
export const nav: NavLecture[] = lectures.map((lecture) => ({
  id: lecture.id,
  slug: lecture.slug,
  title: lecture.title,
  description: lecture.description,
  topics: lecture.topics.map((t) => ({ id: t.id, slug: t.slug, title: t.title })),
}));

/**
 * Content model for the InfoSec notes site.
 * Lectures are parsed from the HTML study-note files in `content/`
 * (see `lib/content.ts`); videos and metadata come from `data/lectures.ts`.
 */

export interface Video {
  url: string;
  /** Optional caption shown above the embed. */
  title?: string;
}

export interface Topic {
  id: string;
  /** URL-safe id; used as the in-page anchor (e.g. `#key-generation`). */
  slug: string;
  title: string;
  /** Pre-rendered HTML for the topic body (from the source study notes). */
  content: string;
}

export interface Lecture {
  id: string;
  /** URL segment: /lectures/[slug] */
  slug: string;
  title: string;
  description: string;
  /** One or more lecture videos. */
  videos: Video[];
  topics: Topic[];
}

/* ── Lightweight shapes for the (client) sidebar ──────────────────
   The sidebar never needs topic HTML, so we pass only what it renders.
   This keeps the heavy content out of the client bundle.            */

export interface NavTopic {
  id: string;
  slug: string;
  title: string;
}

export interface NavLecture {
  id: string;
  slug: string;
  title: string;
  description: string;
  topics: NavTopic[];
}

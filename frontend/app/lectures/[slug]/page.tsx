import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { lectures, getLectureBySlug } from "@/lib/content";
import { TopicNav } from "@/components/navigation/TopicNav";
import { LectureVideos } from "@/components/ui/LectureVideos";
import "@/app/content.css";

/** Pre-render every lecture at build time. */
export function generateStaticParams() {
  return lectures.map((lecture) => ({ slug: lecture.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lecture = getLectureBySlug(slug);
  if (!lecture) return { title: "Not found" };
  return { title: lecture.title, description: lecture.description };
}

export default async function LecturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lecture = getLectureBySlug(slug);
  if (!lecture) notFound();

  return (
    <div className="mx-auto flex max-w-5xl gap-10 px-5 py-10 sm:px-8 sm:py-12">
      <article className="min-w-0 flex-1">
        {/* Heading */}
        <Link
          href="/"
          className="text-sm font-medium text-muted transition hover:text-ink"
        >
          ← All lectures
        </Link>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">
          {lecture.title}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
          {lecture.description}
        </p>

        {/* Lecture video(s) */}
        <LectureVideos videos={lecture.videos} />

        {/* Inline topic nav for mobile / narrow screens */}
        <div className="mt-8 rounded-xl border border-border bg-surface p-4 xl:hidden">
          <TopicNav topics={lecture.topics} />
        </div>

        {/* Topic sections */}
        <div className="mt-10 space-y-14">
          {lecture.topics.map((topic) => (
            <section key={topic.id} id={topic.slug} className="scroll-mt-20">
              <h2 className="mb-5 text-xl font-semibold tracking-tight text-ink">
                {topic.title}
              </h2>
              <div
                className="lecture-content"
                dangerouslySetInnerHTML={{ __html: topic.content }}
              />
            </section>
          ))}
        </div>
      </article>

      {/* Sticky topic nav — desktop only. Scrolls on its own when the topic
          list is taller than the viewport. */}
      <aside className="hidden w-56 shrink-0 xl:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <TopicNav topics={lecture.topics} />
        </div>
      </aside>
    </div>
  );
}

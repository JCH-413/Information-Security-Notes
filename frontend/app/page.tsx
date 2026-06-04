import Link from "next/link";
import { lectures } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-accent">Information Security</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Lecture Notes
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-muted">
          A clean, searchable reference for the course. Pick a lecture from the
          sidebar, or start with one below. Each lecture is broken into topics
          with detailed notes and an accompanying video.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
          All lectures
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {lectures.map((lecture) => (
            <li key={lecture.id}>
              <Link
                href={`/lectures/${lecture.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-ink group-hover:text-accent">
                  {lecture.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {lecture.description}
                </p>
                <span className="mt-4 text-xs font-medium text-faint">
                  {lecture.topics.length}{" "}
                  {lecture.topics.length === 1 ? "topic" : "topics"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import type { Topic } from "@/lib/types";

/**
 * In-page topic navigation with scroll-spy. Highlights the topic currently in
 * view using IntersectionObserver — no scroll listeners, no state libraries.
 */
export function TopicNav({ topics }: { topics: Topic[] }) {
  const [activeSlug, setActiveSlug] = useState(topics[0]?.slug ?? "");

  useEffect(() => {
    const sections = topics
      .map((t) => document.getElementById(t.slug))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSlug(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [topics]);

  if (topics.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
        On this page
      </p>
      <ul className="space-y-1 border-l border-border">
        {topics.map((t) => {
          const active = t.slug === activeSlug;
          return (
            <li key={t.id}>
              <a
                href={`#${t.slug}`}
                className={[
                  "-ml-px block border-l-2 py-1 pl-3 transition",
                  active
                    ? "border-accent font-medium text-ink"
                    : "border-transparent text-muted hover:border-border-strong hover:text-ink",
                ].join(" ")}
              >
                {t.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

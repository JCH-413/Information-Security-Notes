"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLecture } from "@/lib/types";
import { filterLectures } from "@/lib/search";
import { SearchBar } from "@/components/search/SearchBar";

export function Sidebar({
  lectures,
  onNavigate,
}: {
  lectures: NavLecture[];
  /** Called when a link is clicked — used to close the mobile drawer. */
  onNavigate?: () => void;
}) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const results = useMemo(() => filterLectures(lectures, query), [lectures, query]);
  const searching = query.trim().length > 0;

  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pb-3 pt-4">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-6">
        <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-faint">
          Lectures
        </p>

        {results.length === 0 && (
          <p className="px-2 py-6 text-sm text-muted">No matches for “{query}”.</p>
        )}

        <ul className="space-y-0.5">
          {results.map(({ lecture, matchedTopics }) => {
            const href = `/lectures/${lecture.slug}`;
            const active = pathname === href;
            return (
              <li key={lecture.id}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className={[
                    "block rounded-lg px-3 py-2 text-sm transition",
                    active
                      ? "bg-accent-soft font-semibold text-ink"
                      : "text-muted hover:bg-border/50 hover:text-ink",
                  ].join(" ")}
                >
                  {lecture.title}
                </Link>

                {/* When searching, surface the matching topics as deep links. */}
                {searching && matchedTopics.length > 0 && (
                  <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-border pl-3">
                    {matchedTopics.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`${href}#${t.slug}`}
                          onClick={onNavigate}
                          className="block rounded-md px-2 py-1 text-[13px] text-muted transition hover:bg-border/50 hover:text-ink"
                        >
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

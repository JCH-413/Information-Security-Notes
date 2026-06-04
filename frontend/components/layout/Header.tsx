"use client";

import Link from "next/link";

/** Compact top toolbar. The hamburger is mobile-only; the brand links home. */
export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-canvas/85 px-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="-ml-1 rounded-lg p-2 text-muted transition hover:bg-border/60 hover:text-ink lg:hidden"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
        </svg>
      </button>

      <Link href="/" className="flex items-center gap-2.5">
        <img
          src="/favicon-no-bg.png"
          alt="InfoSec logo"
          className="h-7 w-7 rounded-lg object-cover"
        />
        <span className="text-sm font-semibold tracking-tight text-ink">
          InfoSec Notes
        </span>
      </Link>
    </header>
  );
}

"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { NavLecture } from "@/lib/types";
import { Header } from "./Header";
import { Sidebar } from "@/components/navigation/Sidebar";

/**
 * App shell: persistent sidebar on desktop, slide-in drawer on mobile.
 * Holds the only piece of layout state — whether the mobile drawer is open.
 */
export function AppShell({
  lectures,
  children,
}: {
  lectures: NavLecture[];
  children: ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="min-h-screen">
      <Header onMenuClick={() => setDrawerOpen(true)} />

      <div className="mx-auto flex w-full max-w-screen-2xl">
        {/* Desktop sidebar — always visible. */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-72 shrink-0 border-r border-border bg-surface lg:block">
          <Sidebar lectures={lectures} />
        </aside>

        {/* Mobile drawer. */}
        {drawerOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
              onClick={closeDrawer}
              aria-hidden
            />
            <aside className="absolute left-0 top-0 h-full w-72 max-w-[82%] border-r border-border bg-surface shadow-xl">
              <div className="flex h-14 items-center justify-between border-b border-border px-4">
                <span className="text-sm font-semibold text-ink">Lectures</span>
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close navigation"
                  className="rounded-lg p-2 text-muted transition hover:bg-border/60 hover:text-ink"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="h-[calc(100%-3.5rem)]">
                <Sidebar lectures={lectures} onNavigate={closeDrawer} />
              </div>
            </aside>
          </div>
        )}

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

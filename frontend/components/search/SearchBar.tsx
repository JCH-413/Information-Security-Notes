"use client";

/** Controlled search input. State lives in the parent so results update live. */
export function SearchBar({
  value,
  onChange,
  placeholder = "Search lectures & topics",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="9" cy="9" r="6" />
        <path d="m17 17-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search lectures and topics"
        className="w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-3 text-sm text-ink placeholder:text-faint shadow-sm outline-none transition focus:border-border-strong focus:ring-2 focus:ring-accent-soft"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-faint transition hover:text-ink"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 2l10 10M12 2L2 12" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

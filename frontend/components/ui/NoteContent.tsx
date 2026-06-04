/**
 * Renders plain-text note content: blank lines split paragraphs, and runs of
 * lines starting with "- " become bullet lists. Deliberately tiny — swap for a
 * markdown renderer later if richer formatting is needed.
 */
export function NoteContent({ content }: { content: string }) {
  const blocks = content.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-4 text-[15px] leading-7 text-ink/85">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.trimStart().startsWith("- "));

        if (isList) {
          return (
            <ul key={i} className="space-y-1.5 pl-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-2.5">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{l.replace(/^\s*-\s+/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}

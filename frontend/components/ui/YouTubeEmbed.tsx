/** Extracts a YouTube video id from the common URL shapes. */
function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/watch\?v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

export function YouTubeEmbed({ url, title }: { url: string; title: string }) {
  const id = getYouTubeId(url);

  if (!id) {
    // Unrecognized URL — still give the reader a usable link.
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
      >
        Watch on YouTube ↗
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-black shadow-soft">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

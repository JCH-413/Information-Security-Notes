import type { Video } from "@/lib/types";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function LectureVideos({ videos }: { videos: Video[] }) {
  if (!videos.length) return null;
  const multiple = videos.length > 1;

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
        {multiple ? "Lecture videos" : "Lecture video"}
      </h2>
      <div className={multiple ? "grid gap-5 sm:grid-cols-2" : "max-w-2xl"}>
        {videos.map((video, i) => (
          <div key={i}>
            {video.title && (
              <p className="mb-2 text-sm font-medium text-muted">{video.title}</p>
            )}
            <YouTubeEmbed url={video.url} title={video.title ?? `Video ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

import type { NavLecture, NavTopic } from "./types";

export interface LectureMatch {
  lecture: NavLecture;
  /** Topics whose title matched the query (empty when the lecture itself matched). */
  matchedTopics: NavTopic[];
}

/**
 * Filters lectures by query against lecture title, lecture description and
 * topic titles. Pure and synchronous so the UI can call it on every keystroke.
 */
export function filterLectures(lectures: NavLecture[], query: string): LectureMatch[] {
  const q = query.trim().toLowerCase();
  if (!q) return lectures.map((lecture) => ({ lecture, matchedTopics: [] }));

  const results: LectureMatch[] = [];

  for (const lecture of lectures) {
    const lectureHit =
      lecture.title.toLowerCase().includes(q) ||
      lecture.description.toLowerCase().includes(q);

    const matchedTopics = lecture.topics.filter((t) =>
      t.title.toLowerCase().includes(q)
    );

    if (lectureHit || matchedTopics.length > 0) {
      results.push({ lecture, matchedTopics });
    }
  }

  return results;
}

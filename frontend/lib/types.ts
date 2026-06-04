/**
 * Content model for the InfoSec notes site.
 * Everything in the app is generated from data shaped like this.
 */

export interface Topic {
  id: string;
  /** URL-safe id; used as the in-page anchor (e.g. `#cia-triad`). */
  slug: string;
  title: string;
  /**
   * Note body. Plain text today, with blank lines separating paragraphs and
   * lines starting with "- " rendered as list items. Swap in a markdown
   * renderer later without touching the rest of the app.
   */
  content: string;
  /** Optional per-topic video; falls back to the lecture video when absent. */
  youtubeUrl?: string;
}

export interface Lecture {
  id: string;
  /** URL segment: /lectures/[slug] */
  slug: string;
  title: string;
  description: string;
  youtubeUrl?: string;
  topics: Topic[];
}

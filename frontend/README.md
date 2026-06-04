# InfoSec Notes

A static, data-driven notes site for information security lectures. Built with
Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. No backend, database,
or CMS. Lecture content lives as HTML study-note files in `content/`; the app
parses each `<section>` into a navigable topic and renders it under its own
light theme.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

## Adding a lecture

Two steps — the sidebar, routes (`/lectures/[slug]`), search, and topic
navigation all update automatically:

1. Drop the study-notes `.html` file into [`content/`](content/).
2. Register it in [`data/lectures.ts`](data/lectures.ts):

```ts
{
  id: "5",
  file: "Access_Control_StudyNotes.html", // file in content/
  slug: "access-control",                  // → /lectures/access-control
  title: "Access Control",
  description: "One-line summary shown on the home page and sidebar.",
  videos: [
    { url: "https://youtu.be/..." },
    { url: "https://youtu.be/...", title: "Part 2" }, // optional caption
  ],
}
```

**How parsing works:** [`lib/content.ts`](lib/content.ts) reads each file at
build time, turns every `<section>` into a topic (its `<h2>` becomes the title
and nav anchor), strips the source's dark-theme chrome (top bar, hero, table of
contents), and keeps the rich section bodies. Those bodies are re-styled by
[`app/content.css`](app/content.css), which maps the source's component classes
(`.card`, `.math-block`, `.exam-box`, tables, …) onto the site's light palette.
If a new file introduces a class not yet covered, add a rule there.

## Structure

```
app/
  layout.tsx                 root layout + app shell
  page.tsx                   home page (lecture cards)
  content.css                light re-theme for imported note HTML
  lectures/[slug]/page.tsx   lecture detail (SSG)
components/
  layout/   AppShell, Header
  navigation/ Sidebar, TopicNav (scroll-spy)
  search/   SearchBar
  ui/       YouTubeEmbed, LectureVideos
content/                     ← study-note .html files (one per lecture)
data/lectures.ts             ← register each file here (slug, title, videos)
lib/content.ts               HTML → lecture/topic parser (build time)
lib/types.ts                 content model
lib/search.ts                lecture/topic filtering
```

## Deploy to Vercel

Import the repository in Vercel and set the **Root Directory** to `frontend`.
Framework preset (Next.js), build command, and output are auto-detected. No
environment variables required.

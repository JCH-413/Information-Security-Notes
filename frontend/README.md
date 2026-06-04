# InfoSec Notes

A static, data-driven notes site for information security lectures. Built with
Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. No backend, database,
or CMS — all content lives in one typed file.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

## Adding a lecture

Everything is generated from [`data/lectures.ts`](data/lectures.ts). Append a
lecture object — the sidebar, routes (`/lectures/[slug]`), search, and topic
navigation all update automatically. No other file changes.

```ts
{
  id: "4",
  slug: "access-control",          // becomes /lectures/access-control
  title: "Access Control",
  description: "One-line summary shown on the home page and sidebar.",
  youtubeUrl: "https://www.youtube.com/watch?v=...",  // optional
  topics: [
    {
      id: "4-1",
      slug: "rbac",                // in-page anchor: /lectures/access-control#rbac
      title: "Role-Based Access Control",
      content:
        "A paragraph of notes.\n\n" +
        "- A bullet point\n- Another bullet point",
      youtubeUrl: "https://...",   // optional per-topic video
    },
  ],
}
```

**Content formatting:** `content` is plain text. Blank lines separate
paragraphs; lines starting with `- ` render as a bullet list. To support full
markdown later, replace [`components/ui/NoteContent.tsx`](components/ui/NoteContent.tsx)
with a markdown renderer — nothing else needs to change.

## Structure

```
app/
  layout.tsx                 root layout + app shell
  page.tsx                   home page (lecture cards)
  lectures/[slug]/page.tsx   lecture detail (SSG)
components/
  layout/   AppShell, Header
  navigation/ Sidebar, TopicNav (scroll-spy)
  search/   SearchBar
  ui/       YouTubeEmbed, NoteContent
data/lectures.ts             ← the single source of content
lib/types.ts                 content model
lib/search.ts                lecture/topic filtering
```

## Deploy to Vercel

Import the repository in Vercel and set the **Root Directory** to `frontend`.
Framework preset (Next.js), build command, and output are auto-detected. No
environment variables required.

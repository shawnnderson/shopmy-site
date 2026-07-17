# Personal Storefront

A single-page storefront built with Next.js (App Router) + Tailwind CSS: a
full-height hero, sticky nav, two ShopMy embed sections, an about block, and
a footer with social links.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing your content

Almost everything you'll want to change lives in one file:
**`config/site.ts`** — brand name, tagline, nav links, shop section titles,
about copy, and social links.

## Adding your ShopMy embeds

Open `app/page.tsx`. There are two `<ShopSection>` blocks, each with a
comment showing exactly where to paste your embed code from the ShopMy
dashboard, e.g.:

```tsx
<ShopSection id={everyday.id} eyebrow={everyday.eyebrow} title={everyday.title} subtitle={everyday.subtitle}>
  <iframe
    src="https://shopmy.us/embed/your-collection-id"
    className="h-[600px] w-full border-0"
    loading="lazy"
  />
</ShopSection>
```

Until you paste something in, each section shows a placeholder so you can
see the layout. Need a third section? Add an entry to `shopSections` in
`config/site.ts` and copy one of the `<ShopSection>` blocks in `app/page.tsx`.

## Adding your photo

The about section (`components/About.tsx`) has a placeholder box where a
portrait should go. Drop a photo at `public/about.jpg` and swap the
placeholder `<div>` for:

```tsx
<Image src="/about.jpg" alt={site.brandName} fill className="object-cover" />
```

(wrap the parent in `relative` if you use `fill`, or just pass fixed
`width`/`height` instead).

## Fonts

- **Alex Brush** (brand wordmark) — free, loaded automatically via
  `next/font/google`.
- **Rage Italic** (taglines / section headers) and **Proxima Nova** (body
  copy) are commercial fonts, so their files aren't included. The site
  currently falls back to Playfair Display Italic and Inter (both free,
  already wired up) so it looks intentional without them. To use the real
  fonts, see `public/fonts/README.md` for exactly which files to add —
  `app/globals.css` will pick them up automatically, no code changes needed.

## Colors

Defined in `app/globals.css` under `@theme inline`:

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F4F1E8` | page background |
| `ink` | `#14130F` | body text |
| `pine` | `#00755E` | hero/footer background, accents |
| `volt` | `#CEFF00` | CTA button, highlights |
| `stone` | `#E7E2D3` | alternating section background |
| `mute` | `#726E5C` | secondary text |

Use them as Tailwind classes, e.g. `bg-pine`, `text-volt`, `border-ink/10`.

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js — no config needed.
4. Deploy. Every push to your default branch redeploys automatically.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

No environment variables or extra config are required — the ShopMy embeds
are plain iframes, so nothing needs a server-side secret.

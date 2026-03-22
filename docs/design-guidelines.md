# docedados.com Design Guidelines

Board games blog. Spanish language. Instagram-imported posts.

## Color Scheme

| Role                  | Value     |
| --------------------- | --------- |
| Background            | `#fffbf8` |
| Font (body)           | `#363636` |
| Font secondary (meta) | `#767676` |
| Emphasis / link hover | `#f32370` |
| Post link             | `#ff6699` |
| Post link hover       | `#ff276f` |
| Border                | `#e8e8e8` |
| Code font             | `#c7254e` |
| Code background       | `#f8f5ec` |
| Table header bg       | `#fbbdd4` |

No dark mode. Background is a warm off-white (`#fffbf8`), not pure white.

## Typography

| Role     | Font                       |
| -------- | -------------------------- |
| Body     | eb-garamond (serif)        |
| Headings | montserrat (sans-serif)    |
| Title    | pirata-one (display)       |
| Alt/Nav  | noto-sans, source-sans-pro |

The header title uses `pirata-one` for the site name. Post meta and navigation use `montserrat`. Body content uses `eb-garamond` (serif).

## Header

Large header area with:
- Circular logo (pink border, rotates on hover)
- Site title in pirata-one font
- Background image (`background-header.gif`)
- Navigation below: Archivo | Juegos | Nosotros

Mobile: hamburger menu button (3 spans, transforms to X).

## Footer

Shows `ಠ_ಠ` emoticon. Plyr video player loads conditionally (only when `.js-player` elements exist on page).

## Navigation

- Desktop: horizontal text links separated by `|`
- Mobile: hamburger button with animated open/close, vertical menu with `aria-expanded`

## Home Page

Intro section with:
- Social icon links (inline flex, reduced spacing on mobile)
- Site title as link with animated hover underline (`bottom: 0`, `scaleX` transition)
- Description paragraph

Posts listed below in full content.

## Post Layout

- Post titles are links, no `#` prefix marker
- Content uses serif font (eb-garamond) at 1.3em, line-height 1.35em
- Post meta: author linked to `config.authors[author].url`, with date
- Post footer: tags, permalink, line-height 1.35em
- Post navigation (prev/next): flexbox layout, stacks vertically on mobile
- Gallery slider via `hexo-gallery-slider` plugin for image posts
- Miniblog posts: bordered cards with hashtag link

## Comments

No visible comment system.

## Authors System

```yaml
authors:
  neverbot:
    url: https://neverbot.com
  docedados:
    url: https://docedados.com
```

All posts have `author: neverbot` in frontmatter.

## Instagram Import

Posts are imported from Instagram using the `hexo-from-ig` skill. Post structure:
- `template: instagram` in frontmatter
- `media` array listing image filenames
- `{% gallery %}` tag for images
- `@mentions` converted to Instagram profile links
- `#hashtags` in body text linked to blog tag pages

## Tag/Archive Pages

- Tag pages use `montserrat` font (header font), not `eb-garamond`
- Archive list items use flexbox with title + date
- On mobile, titles wrap and dates appear below
- `post-title` margin reset to 0 inside archive lists (prevents inherited 10% margin)

## Unique Features

- Instagram post import workflow
- Gallery slider for image posts
- Warm off-white background
- Serif body font (eb-garamond) for editorial feel
- Mixed serif/sans typography

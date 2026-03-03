# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the Bowes Park annual Pride event. Built with Nuxt 4 and deployed to GitHub Pages as a pre-rendered static site.

- **Event**: Sunday 5th July 2026, 10am–6pm, Myddleton Road, Bowes Park, London N22
- **Package manager**: pnpm
- **Icons**: Lucide Vue Next (not FontAwesome)
- **Fonts**: Bricolage Grotesque (headings), DM Sans (body) via `@nuxtjs/google-fonts`
- **Analytics**: Google Analytics via `nuxt-gtag`

## Development Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Build for production (use `NITRO_PRESET=github_pages pnpm build` for GitHub Pages)
- `pnpm generate` — Generate static site
- `pnpm preview` — Preview production build locally

## Project Structure

- `app/` — Source directory (Nuxt 4 `srcDir`)
  - `app.vue` — Root component
  - `pages/` — Routes: `index`, `about`, `donate`, `sponsors`
  - `components/` — Auto-imported, flat (no path prefix)
    - `global/` — SiteHeader, SiteFooter
    - `sections/` — Page sections (HeroBanner, InfoSection, LineupSection, etc.)
    - `elements/` — Reusable elements (SectionWrapper, CountdownTimer, FaqItem, SponsorLogo)
  - `composables/` — useCountdown, useScrollReveal
  - `data/` — Static data (faq, lineup, sponsors, sponsorTiers)
  - `assets/styles/` — SCSS stylesheets
  - `layouts/` — default layout
  - `plugins/` — Nuxt plugins
- `public/` — Static assets (images, sponsor logos in `public/sponsors/`)
- `nuxt.config.ts` — Nuxt configuration
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## SCSS

- Uses Dart Sass with `@use`/`@forward` module system (not `@import`)
- `_variables`, `_typography`, and `_mixins` are injected into all component styles via `additionalData` in nuxt.config
- Partials that output CSS (`_base`, `_utilities`, `_reset`) must explicitly `@use` their dependencies
- Use `color.adjust()` not `darken()`/`lighten()`, `map.get()` not `map-get()` (Dart Sass 3.0 compat)

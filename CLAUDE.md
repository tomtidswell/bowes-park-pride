# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the Bowes Park annual Pride event. Built with Nuxt 4 and deployed to GitHub Pages as a pre-rendered static site.

## Development Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Build for production (use `NITRO_PRESET=github_pages pnpm build` for GitHub Pages)
- `pnpm generate` — Generate static site
- `pnpm preview` — Preview production build locally

## Project Structure

- `app/` — Source directory (Nuxt 4 default `srcDir`)
  - `app.vue` — Root component
- `public/` — Static assets served as-is
- `nuxt.config.ts` — Nuxt configuration
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

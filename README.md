# Nitish Online Portfolio

A GitHub Pages-ready personal website built with React, TypeScript, Tailwind CSS, shadcn-style UI structure, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This project is configured for the repository name `nitish-mishra-resume` in [vite.config.ts](/c:/PROJECTS/onlineresume/vite.config.ts). If the repository name changes, update the `base` value before deploying.

The workflow in [.github/workflows/deploy.yml](/c:/PROJECTS/onlineresume/.github/workflows/deploy.yml) will publish the `dist` folder to GitHub Pages when you push to `main`.

If GitHub Actions reports that the Pages site was not found, open the repository settings and enable Pages with `Build and deployment -> Source -> GitHub Actions`.

If you want the workflow to try enabling Pages automatically, add a repository secret named `PAGES_ENABLEMENT_TOKEN` with a Personal Access Token that has repository administration and Pages write access.

# lpremuda.github.io

Personal portfolio website for Lucas Premuda.

## Stack

- **React 19** + **TypeScript** via **Vite**
- **Framer Motion** for animations
- **Lucide React** for icons
- Custom CSS with design tokens (dark/light theme)

## Features

- Dark/light mode toggle (preference persisted in localStorage)
- Framer Motion scroll reveal and staggered hero animations
- Responsive layout with hamburger mobile menu
- Sections: Hero, About, Experience, Skills, Projects

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Two GitHub Actions workflows handle deployment automatically.

### Production

**Workflow:** `.github/workflows/deploy-production.yml`

Triggered by pushes to `master`. Builds the site with base path `/` and deploys `dist/` to the root of the `gh-pages` branch.

Live site: `https://lpremuda.github.io`

### Staging

**Workflow:** `.github/workflows/deploy-staging.yml`

Triggered by pushes to any branch other than `master`. Builds the site with base path `/staging/` and deploys `dist/` to the `staging/` subdirectory of the `gh-pages` branch.

Staging site: `https://lpremuda.github.io/staging/`

### Workflow

1. Create a feature branch and open a PR against `master`
2. Push commits — the staging workflow deploys automatically to `https://lpremuda.github.io/staging/`
3. Verify the staging site looks correct
4. Merge the PR — the production workflow deploys to `https://lpremuda.github.io`

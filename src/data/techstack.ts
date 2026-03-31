import {
  Code2,
  Zap,
  Palette,
  Wind,
  Github,
  Globe,
  FileCode2,
  GitBranch,
  Package,
  Cpu,
  Boxes,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface StackItem {
  name: string;
  Icon: LucideIcon;
  version: string;
  role: string;
  detail: string;
  bullets: string[];
  url: string;
}

export interface PipelineStep {
  num: string;
  title: string;
  description: string;
  detail: string;
  code?: string;
}

export interface CiCard {
  label: string;
  trigger: string;
  triggerDetail: string;
  buildEnv?: string;
  steps: string[];
  deployTarget: string;
  deployDetail: string;
  url: string;
}

export interface DesignDecision {
  question: string;
  answer: string;
  tradeoff: string;
}

export const stackItems: StackItem[] = [
  {
    name: 'React 19',
    Icon: Code2,
    version: '19.x',
    role: 'UI Framework',
    detail:
      'The site is a React single-page application. Every section — Hero, About, Experience, Skills, Projects, and this page — is a self-contained functional component. State is kept minimal: theme preference, nav scroll position, active section, and mobile menu open/close. No Redux or context; everything is either local state or custom hooks.',
    bullets: [
      'Functional components + hooks throughout — no class components',
      'useTheme hook persists dark/light preference to localStorage',
      'useScrolledNav hook adds a backdrop-blur effect to the nav after 10px of scroll',
      'useActiveSection hook uses IntersectionObserver to highlight the active nav link',
      'StrictMode enabled to surface double-render bugs during development',
    ],
    url: 'https://react.dev',
  },
  {
    name: 'TypeScript',
    Icon: FileCode2,
    version: '5.9',
    role: 'Type Safety',
    detail:
      'Every file is TypeScript with strict mode enabled. Interfaces are defined for all data shapes (experience entries, projects, skills, stack items). Component props are typed. This catches mistakes like passing the wrong prop type or accessing undefined fields — at compile time, before the code ever runs in a browser.',
    bullets: [
      'tsconfig.app.json with strict: true, noUncheckedIndexedAccess, and exactOptionalPropertyTypes',
      'All data files in src/data/ export typed arrays — no implicit any',
      'npm run typecheck runs tsc --noEmit as a standalone check without emitting files',
      'LucideIcon type used for icon props in data files to avoid manual SVG typing',
    ],
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Vite 8',
    Icon: Zap,
    version: '8.x',
    role: 'Build Tool & Dev Server',
    detail:
      'Vite replaced the traditional webpack + babel setup. In development, it serves source files as native ES modules directly to the browser — no bundling step, so the dev server starts in under 300ms and hot module replacement is instant. For production, Vite uses Rolldown (Rust-based) to bundle, minify, and tree-shake all modules into a small set of content-hashed assets in dist/.',
    bullets: [
      'Dev server starts cold in ~280ms — no upfront bundle',
      'HMR swaps changed modules in <50ms without a full page reload',
      'Production output: one JS chunk, one CSS file, all assets content-hashed for long-term caching',
      'VITE_BASE_PATH env var baked into asset URLs at build time for staging vs production routing',
      '@tailwindcss/vite plugin runs Tailwind as a Vite transform — no separate PostCSS config needed',
    ],
    url: 'https://vite.dev',
  },
  {
    name: 'Tailwind CSS v4',
    Icon: Palette,
    version: '4.x',
    role: 'Styling',
    detail:
      'Styles are written as utility classes directly in JSX rather than in separate CSS files. Tailwind v4 introduces a new @theme directive in globals.css that replaces the old tailwind.config.ts file — all design tokens (colors, fonts, breakpoints, animations) are defined there as CSS custom properties, which Tailwind reads to generate utility classes. Theme switching between dark and light mode works by redefining those custom properties under the [data-theme="light"] selector, so every Tailwind utility automatically reflects the current theme.',
    bullets: [
      'Zero tailwind.config.ts — all tokens live in @theme inside globals.css',
      '@tailwindcss/vite plugin integrates directly into the Vite build pipeline',
      'Dark/light theming via CSS custom property overrides under [data-theme="light"]',
      '@layer components defines .btn, .tag, .section, .container and pseudo-element rules',
      'Pseudo-elements (timeline::before, skill-card li::before) live in @layer components since Tailwind utilities cannot generate them',
      'Custom breakpoints: lg=900px, md=720px, sm=480px — matching the original design',
    ],
    url: 'https://tailwindcss.com',
  },
  {
    name: 'Framer Motion',
    Icon: Wind,
    version: '11.x',
    role: 'Animations',
    detail:
      'All entrance animations are driven by Framer Motion rather than CSS keyframes. The hero section uses a container/item variant pattern: the container staggers its children with a 150ms delay between each, so the greeting, name, title, description, CTA, and social links reveal in sequence. Every other section uses whileInView with once: true — the animation fires exactly once when the element first enters the viewport, and never replays on scroll-back.',
    bullets: [
      'Hero: container variant staggers children at 150ms intervals, delayed 200ms after mount',
      'Sections: whileInView + viewport={{ once: true, amount: 0.12 }} for scroll-triggered reveals',
      'Easing: cubic-bezier(0.4, 0, 0.2, 1) — the Material Design "standard" curve',
      'Scroll indicator: CSS animation (fadeInUp at 1.1s, then bobDown loop) since it is not a motion.* element',
      'All transforms use translateY to avoid layout thrashing — no width/height animation',
    ],
    url: 'https://motion.dev',
  },
  {
    name: 'Lucide React',
    Icon: Boxes,
    version: '0.511',
    role: 'Icon Library',
    detail:
      'Lucide provides the SVG icons used throughout the site — nav arrows, section decorations, skill category icons, social links, and project cards. Icons are imported as tree-shakeable React components, so the final bundle only includes the icons actually used. Every icon is rendered at a consistent strokeWidth of 1.5 for a unified visual weight.',
    bullets: [
      'Tree-shakeable — only imported icons appear in the production bundle',
      'strokeWidth={1.5} set consistently across all icon usages',
      'Icon components typed as LucideIcon in data files for safe dynamic rendering',
      'Used as data — skill categories store their Icon reference directly in the data object',
    ],
    url: 'https://lucide.dev',
  },
  {
    name: 'GitHub Actions',
    Icon: Github,
    version: '',
    role: 'CI / CD',
    detail:
      'Two separate workflow files handle the full deployment lifecycle. deploy-production.yml watches the master branch and deploys to the live site. deploy-staging.yml watches every other branch and deploys a preview to the /staging/ subdirectory. Both workflows share the same build steps but differ in environment variable and deploy target. The key to making them coexist is keep_files: true on both — this tells the deploy action to preserve files outside its own publish directory rather than wiping the branch on each push.',
    bullets: [
      'deploy-production.yml: triggers on push to master, deploys to gh-pages root',
      'deploy-staging.yml: triggers on push to any non-master branch, deploys to gh-pages/staging/',
      'VITE_BASE_PATH=/staging/ injected as env var in staging build so asset URLs resolve correctly',
      'keep_files: true on both workflows prevents production deploys from deleting staging and vice versa',
      'peaceiris/actions-gh-pages@v4 handles the force-push to gh-pages with .nojekyll included',
    ],
    url: 'https://github.com/features/actions',
  },
  {
    name: 'GitHub Pages',
    Icon: Globe,
    version: '',
    role: 'Hosting',
    detail:
      'The site is served as static files from the gh-pages branch. There is no web server, no Node.js process, no database. GitHub Pages reads the gh-pages branch and serves its contents through a global CDN. The .nojekyll file at the root disables Jekyll processing so the plain HTML/CSS/JS output from Vite is served as-is. Custom domain configuration is not used — the canonical URL is the default lpremuda.github.io.',
    bullets: [
      'Pure static hosting — no server runtime, no compute costs',
      'Served from GitHub\'s global CDN with automatic HTTPS via Let\'s Encrypt',
      '.nojekyll disables Jekyll so Vite\'s dist/ output is served without transformation',
      'gh-pages branch is the sole source of truth for what is live',
      'Asset URLs include content hashes — browsers cache forever, cache busted on every deploy',
    ],
    url: 'https://pages.github.com',
  },
];

export const pipelineSteps: PipelineStep[] = [
  {
    num: '01',
    title: 'Write Source Code',
    description: 'Edit TypeScript + React components locally',
    detail:
      'All source lives in src/. Components in src/components/, data arrays in src/data/, custom hooks in src/hooks/. Styles are Tailwind utility classes inline in JSX — no separate .css files per component.',
    code: 'npm run dev   # starts Vite dev server at localhost:5173',
  },
  {
    num: '02',
    title: 'Push to GitHub',
    description: 'git push triggers the correct workflow',
    detail:
      'Pushing to master triggers deploy-production.yml. Pushing to any other branch (feature branches, fix branches) triggers deploy-staging.yml. The branch name determines which environment gets updated.',
    code: 'git push origin feat/my-feature   # → staging\ngit push origin master             # → production',
  },
  {
    num: '03',
    title: 'GitHub Actions Runner Starts',
    description: 'A fresh ubuntu-latest VM is provisioned',
    detail:
      'GitHub spins up a clean Ubuntu virtual machine. It checks out the repository at the pushed commit, installs Node 20 via actions/setup-node, and runs npm ci to restore exact dependency versions from package-lock.json.',
    code: 'npm ci   # installs exact lockfile versions, no surprise upgrades',
  },
  {
    num: '04',
    title: 'Vite Builds the App',
    description: 'npm run build compiles, bundles, and tree-shakes',
    detail:
      'Vite compiles TypeScript, resolves all imports, applies Tailwind (via @tailwindcss/vite), bundles everything with Rolldown, and emits content-hashed assets to dist/. For staging, VITE_BASE_PATH=/staging/ is set so all asset <script> and <link> tags reference /staging/assets/... instead of /assets/...',
    code: '# Production\nnpm run build\n\n# Staging\nVITE_BASE_PATH=/staging/ npm run build',
  },
  {
    num: '05',
    title: 'Deploy to gh-pages Branch',
    description: 'dist/ is force-pushed to the gh-pages branch',
    detail:
      'peaceiris/actions-gh-pages reads the dist/ directory and force-pushes its contents to the gh-pages branch. Production deploys to the root; staging deploys to the staging/ subdirectory via destination_dir: staging. Both use keep_files: true so each deploy only touches its own directory.',
    code: '# What the gh-pages branch looks like after both deploys:\ngh-pages/\n├── index.html          ← production\n├── assets/\n│   └── index-[hash].js\n└── staging/\n    ├── index.html        ← staging\n    └── assets/',
  },
  {
    num: '06',
    title: 'GitHub Pages Serves the Site',
    description: 'CDN picks up the gh-pages branch automatically',
    detail:
      'GitHub Pages detects the push to gh-pages and serves the updated files within seconds. The CDN caches content-hashed assets indefinitely; only index.html is re-fetched on each visit. There is no cache invalidation step — hashed filenames handle it automatically.',
    code: '# Live URLs\nhttps://lpremuda.github.io          ← production\nhttps://lpremuda.github.io/staging/ ← staging',
  },
];

export const ciCards: CiCard[] = [
  {
    label: 'Production',
    trigger: 'Push to master',
    triggerDetail: 'Fires when a PR is merged to master or a direct push lands on the branch.',
    steps: [
      'Checkout repo at HEAD of master',
      'Install Node 20 + npm ci',
      'npm run build (base path: /)',
      'Force-push dist/ to gh-pages root',
    ],
    deployTarget: 'gh-pages branch — root /',
    deployDetail: 'Overwrites only the root of gh-pages. The staging/ subdirectory is preserved by keep_files: true.',
    url: 'lpremuda.github.io',
  },
  {
    label: 'Staging',
    trigger: 'Push to any non-master branch',
    triggerDetail: 'Fires on every push to a feature branch, fix branch, or any other non-master branch.',
    buildEnv: 'VITE_BASE_PATH=/staging/',
    steps: [
      'Checkout repo at HEAD of feature branch',
      'Install Node 20 + npm ci',
      'VITE_BASE_PATH=/staging/ npm run build',
      'Force-push dist/ to gh-pages/staging/',
    ],
    deployTarget: 'gh-pages branch — staging/ subdirectory',
    deployDetail: 'Writes only to staging/ inside gh-pages. The root production build is preserved by keep_files: true.',
    url: 'lpremuda.github.io/staging/',
  },
];

export const designDecisions: DesignDecision[] = [
  {
    question: 'Why a single-page app instead of a multi-page site?',
    answer:
      'A portfolio is a small, focused document — one continuous narrative from intro to contact. A single page lets the user scroll through the full story without navigating between pages, and smooth-scroll anchors make deep linking still work. There are no SEO requirements that would tip the scales toward SSR or SSG.',
    tradeoff:
      'The tradeoff is a slightly larger initial JS bundle compared to zero-JS static HTML, but at under 200KB gzipped the difference is imperceptible on any modern connection.',
  },
  {
    question: 'Why Tailwind v4 over plain CSS or CSS Modules?',
    answer:
      'Co-locating styles with markup eliminates the cognitive overhead of switching between files and hunting for which CSS class affects which element. Tailwind v4\'s @theme block means all design tokens live in one place (globals.css) rather than scattered across component files. The trade of verbose classNames for tight feedback loops during development was worth it.',
    tradeoff:
      'The tradeoff is longer className strings in JSX. Pseudo-elements (::before, ::after) and the theme variable overrides still require a small CSS file — Tailwind utilities cannot express generated content.',
  },
  {
    question: 'Why GitHub Pages over Vercel, Netlify, or a VPS?',
    answer:
      'For a static site with no server-side logic, GitHub Pages is the simplest possible hosting: the source and deployment live in the same repository, there are no third-party accounts or tokens to manage, and it is completely free with no bandwidth limits for public repos.',
    tradeoff:
      'The tradeoff is no server-side rendering, no edge functions, and no environment variable injection at runtime. All configuration must happen at build time — which is why VITE_BASE_PATH exists.',
  },
  {
    question: 'Why a staging environment for a personal site?',
    answer:
      'Pushing directly to production and hoping it looks right is fine until it is not. The staging environment lets changes be previewed at the real URL with real assets, real fonts, and the real base path before they go live. It also exercises the full CI/CD pipeline on every branch push, so the workflow is always tested.',
    tradeoff:
      'The tradeoff is a slightly more complex workflow config (two yml files, keep_files: true, destination_dir). The complexity is contained to .github/workflows/ and does not affect local development.',
  },
];

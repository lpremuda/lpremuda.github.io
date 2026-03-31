import {
  Code2,
  Zap,
  Palette,
  Wind,
  Github,
  Globe,
  Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface StackItem {
  name: string;
  Icon: LucideIcon;
  version: string;
  role: string;
  detail: string;
  url: string;
}

export interface PipelineStep {
  num: string;
  title: string;
  description: string;
}

export interface CiCard {
  label: string;
  trigger: string;
  buildEnv?: string;
  deployTarget: string;
  url: string;
}

export const stackItems: StackItem[] = [
  {
    name: 'React 19',
    Icon: Code2,
    version: '19.x',
    role: 'UI framework',
    detail:
      'The entire site is a React single-page application. Components are functional with hooks; state is local or lifted to App. React 19 brings improved concurrent features and the new compiler-aware runtime.',
    url: 'https://react.dev',
  },
  {
    name: 'TypeScript',
    Icon: Code2,
    version: '5.9',
    role: 'Type safety',
    detail:
      'All source files are TypeScript. Strict mode catches type errors at compile time rather than runtime. The build pipeline runs tsc --noEmit as a typecheck step before bundling.',
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Vite 8',
    Icon: Zap,
    version: '8.x',
    role: 'Build tool & dev server',
    detail:
      'Vite powers both local development (instant HMR via native ES modules) and production builds (Rolldown-based bundling with tree-shaking and code splitting). The output lands in dist/ as a set of hashed static assets.',
    url: 'https://vite.dev',
  },
  {
    name: 'Tailwind CSS v4',
    Icon: Palette,
    version: '4.x',
    role: 'Styling',
    detail:
      'All styles are Tailwind utility classes applied directly in JSX. Design tokens (colors, fonts, breakpoints) are defined in a single @theme block in globals.css and automatically generate utility classes. The @tailwindcss/vite plugin integrates directly into the Vite pipeline — no PostCSS config needed.',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'Framer Motion',
    Icon: Wind,
    version: '11.x',
    role: 'Animations',
    detail:
      'Scroll-triggered entrance animations use whileInView with once: true so they fire exactly once as each section enters the viewport. The hero section uses a staggered container/item variant pattern. Spring and cubic-bezier easing is applied throughout.',
    url: 'https://motion.dev',
  },
  {
    name: 'GitHub Actions',
    Icon: Github,
    version: '',
    role: 'CI / CD',
    detail:
      'Two workflows handle deployment. deploy-production.yml triggers on pushes to master and deploys to the root of the gh-pages branch. deploy-staging.yml triggers on any non-master push and deploys to the staging/ subdirectory with VITE_BASE_PATH=/staging/ set at build time. Both use keep_files: true so deploys never overwrite each other.',
    url: 'https://github.com/features/actions',
  },
  {
    name: 'GitHub Pages',
    Icon: Globe,
    version: '',
    role: 'Hosting',
    detail:
      'The site is served entirely as static files from the gh-pages branch of the repository. GitHub Pages serves the branch via its global CDN. No server, no database, no runtime — just pre-built HTML, CSS, and JS.',
    url: 'https://pages.github.com',
  },
];

export const pipelineSteps: PipelineStep[] = [
  {
    num: '01',
    title: 'Source Code',
    description:
      'TypeScript + React source lives in src/. Data (experience, projects, skills) is co-located in src/data/. Styles are utility classes in JSX, backed by globals.css.',
  },
  {
    num: '02',
    title: 'Push to GitHub',
    description:
      'A git push triggers the appropriate GitHub Actions workflow based on the target branch. Feature branches hit the staging workflow; master hits production.',
  },
  {
    num: '03',
    title: 'GitHub Actions CI',
    description:
      'The runner installs Node 20, runs npm ci to restore exact lockfile dependencies, then npm run build. For staging, VITE_BASE_PATH=/staging/ is injected as an environment variable.',
  },
  {
    num: '04',
    title: 'Vite Build',
    description:
      'Vite compiles TypeScript, bundles all modules, tree-shakes unused code, and emits content-hashed assets to dist/. The base path is baked into all asset URLs at this step.',
  },
  {
    num: '05',
    title: 'Deploy to gh-pages',
    description:
      'peaceiris/actions-gh-pages force-pushes the dist/ directory to the gh-pages branch (root for production, staging/ subdirectory for staging). keep_files: true ensures both environments coexist on the same branch.',
  },
  {
    num: '06',
    title: 'Served by GitHub Pages',
    description:
      'GitHub Pages picks up the gh-pages branch and serves it via its CDN. Production is live at lpremuda.github.io; staging at lpremuda.github.io/staging/. No origin server — pure static hosting.',
  },
];

export const ciCards: CiCard[] = [
  {
    label: 'Production',
    trigger: 'Push to master',
    deployTarget: 'gh-pages branch — root (/)',
    url: 'lpremuda.github.io',
  },
  {
    label: 'Staging',
    trigger: 'Push to any non-master branch',
    buildEnv: 'VITE_BASE_PATH=/staging/',
    deployTarget: 'gh-pages branch — staging/ subdirectory',
    url: 'lpremuda.github.io/staging/',
  },
];

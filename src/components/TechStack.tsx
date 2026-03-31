import { motion } from 'framer-motion';
import { GitBranch, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import { stackItems, pipelineSteps, ciCards, designDecisions } from '../data/techstack';

// ─── Inline SVG: Architecture Overview Diagram ───────────────────────────────
function ArchDiagram() {
  return (
    <svg
      viewBox="0 0 760 200"
      className="w-full max-w-[760px] mx-auto block"
      aria-label="Architecture overview: browser requests GitHub Pages CDN which serves the gh-pages branch built by Vite from React source"
      role="img"
    >
      {/* ── boxes ── */}
      {/* Browser */}
      <rect x="8" y="70" width="120" height="60" rx="10" className="fill-surface stroke-border" strokeWidth="1.5" />
      <text x="68" y="96" textAnchor="middle" className="fill-text font-sans" fontSize="11" fontWeight="600">Browser</text>
      <text x="68" y="113" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">lpremuda.github.io</text>

      {/* CDN */}
      <rect x="176" y="70" width="120" height="60" rx="10" className="fill-surface stroke-accent" strokeWidth="1.5" />
      <text x="236" y="96" textAnchor="middle" className="fill-text font-sans" fontSize="11" fontWeight="600">GitHub Pages</text>
      <text x="236" y="113" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">CDN / static hosting</text>

      {/* gh-pages branch */}
      <rect x="344" y="70" width="120" height="60" rx="10" className="fill-surface stroke-border" strokeWidth="1.5" />
      <text x="404" y="96" textAnchor="middle" className="fill-text font-sans" fontSize="11" fontWeight="600">gh-pages branch</text>
      <text x="404" y="113" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">index.html + assets/</text>

      {/* GitHub Actions */}
      <rect x="512" y="40" width="120" height="60" rx="10" className="fill-surface stroke-border" strokeWidth="1.5" />
      <text x="572" y="66" textAnchor="middle" className="fill-text font-sans" fontSize="11" fontWeight="600">GitHub Actions</text>
      <text x="572" y="83" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">CI workflow</text>

      {/* Vite Build */}
      <rect x="512" y="120" width="120" height="60" rx="10" className="fill-surface stroke-border" strokeWidth="1.5" />
      <text x="572" y="146" textAnchor="middle" className="fill-text font-sans" fontSize="11" fontWeight="600">Vite Build</text>
      <text x="572" y="163" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">dist/ output</text>

      {/* Source */}
      <rect x="636" y="70" width="116" height="60" rx="10" className="fill-surface stroke-border" strokeWidth="1.5" />
      <text x="694" y="96" textAnchor="middle" className="fill-text font-sans" fontSize="11" fontWeight="600">Source Code</text>
      <text x="694" y="113" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">React + TypeScript</text>

      {/* ── arrows ── */}
      {/* Browser → CDN */}
      <line x1="128" y1="100" x2="172" y2="100" className="stroke-accent" strokeWidth="1.5" markerEnd="url(#arr)" />
      {/* CDN → gh-pages */}
      <line x1="296" y1="100" x2="340" y2="100" className="stroke-border" strokeWidth="1.5" markerEnd="url(#arr-muted)" />
      {/* Actions → gh-pages (deploy) */}
      <line x1="512" y1="80" x2="468" y2="95" className="stroke-border" strokeWidth="1.5" markerEnd="url(#arr-muted)" />
      {/* Vite → Actions */}
      <line x1="572" y1="120" x2="572" y2="104" className="stroke-border" strokeWidth="1.5" markerEnd="url(#arr-muted)" />
      {/* Source → Vite */}
      <line x1="636" y1="130" x2="636" y2="155" className="stroke-border" strokeWidth="1.5" />
      <line x1="636" y1="155" x2="636" y2="155" />
      <line x1="636" y1="155" x2="634" y2="155" className="stroke-border" strokeWidth="1.5" markerEnd="url(#arr-muted)" />
      <line x1="632" y1="155" x2="632" y2="155" className="stroke-border" strokeWidth="1.5" />

      {/* Source → Vite (straight) */}
      <line x1="636" y1="100" x2="636" y2="145" className="stroke-border" strokeWidth="1.5" />
      <line x1="636" y1="145" x2="633" y2="145" className="stroke-border" strokeWidth="1.5" markerEnd="url(#arr-muted)" />

      {/* Labels on arrows */}
      <text x="150" y="93" textAnchor="middle" className="fill-accent font-mono" fontSize="8">HTTPS request</text>
      <text x="318" y="93" textAnchor="middle" className="fill-text-muted font-mono" fontSize="8">reads files</text>
      <text x="485" y="82" textAnchor="middle" className="fill-text-muted font-mono" fontSize="8">force-push</text>

      {/* ── arrowhead markers ── */}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-accent" />
        </marker>
        <marker id="arr-muted" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-border" />
        </marker>
      </defs>
    </svg>
  );
}

// ─── Inline SVG: Branch Strategy Diagram ─────────────────────────────────────
function BranchDiagram() {
  return (
    <svg
      viewBox="0 0 640 160"
      className="w-full max-w-[640px] mx-auto block"
      aria-label="Branch strategy: feature branches deploy to staging, merging to master deploys to production"
      role="img"
    >
      {/* master line */}
      <line x1="60" y1="48" x2="580" y2="48" className="stroke-accent" strokeWidth="2" />
      {/* master label */}
      <circle cx="60" cy="48" r="18" className="fill-surface stroke-accent" strokeWidth="2" />
      <text x="60" y="53" textAnchor="middle" className="fill-accent font-mono" fontSize="9" fontWeight="700">main</text>

      {/* commits on master */}
      {[160, 300, 450, 580].map((x) => (
        <circle key={x} cx={x} cy={48} r={7} className="fill-accent" />
      ))}

      {/* feature branch */}
      <path d="M 160 48 Q 175 48 190 80 L 390 80" className="fill-none stroke-border" strokeWidth="1.5" />
      <path d="M 390 80 Q 420 80 450 48" className="fill-none stroke-border" strokeWidth="1.5" markerEnd="url(#arr-b)" />

      {/* commits on feature */}
      {[240, 320, 390].map((x) => (
        <circle key={x} cx={x} cy={80} r={6} className="fill-surface stroke-border" strokeWidth="1.5" />
      ))}

      {/* labels */}
      <text x="310" y="100" textAnchor="middle" className="fill-text-muted font-mono" fontSize="9">feature branch</text>

      {/* staging badge */}
      <rect x="195" y="110" width="110" height="24" rx="6" className="fill-accent-dim stroke-accent" strokeWidth="1" />
      <text x="250" y="126" textAnchor="middle" className="fill-accent font-mono" fontSize="9" fontWeight="600">→ staging deploy</text>
      <line x1="250" y1="110" x2="310" y2="82" className="stroke-accent" strokeWidth="1" strokeDasharray="3,2" />

      {/* production badge */}
      <rect x="390" y="16" width="120" height="24" rx="6" className="fill-[rgba(74,222,128,0.12)] stroke-green-400" strokeWidth="1" />
      <text x="450" y="32" textAnchor="middle" className="fill-green-400 font-mono" fontSize="9" fontWeight="600">→ production deploy</text>
      <line x1="450" y1="40" x2="450" y2="48" className="stroke-green-400" strokeWidth="1" strokeDasharray="3,2" />

      <defs>
        <marker id="arr-b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-border" />
        </marker>
      </defs>
    </svg>
  );
}

// ─── Inline SVG: gh-pages Branch File Tree ───────────────────────────────────
function FileTreeDiagram() {
  const lines = [
    { x: 20, label: 'gh-pages/', mono: false, indent: 0, accent: false },
    { x: 20, label: '├── .nojekyll', mono: true, indent: 1, accent: false },
    { x: 20, label: '├── index.html', mono: true, indent: 1, accent: true, badge: 'production' },
    { x: 20, label: '├── assets/', mono: true, indent: 1, accent: false },
    { x: 20, label: '│   ├── index-[hash].js', mono: true, indent: 2, accent: false },
    { x: 20, label: '│   └── index-[hash].css', mono: true, indent: 2, accent: false },
    { x: 20, label: '└── staging/', mono: true, indent: 1, accent: false },
    { x: 20, label: '    ├── index.html', mono: true, indent: 2, accent: true, badge: 'staging' },
    { x: 20, label: '    └── assets/', mono: true, indent: 2, accent: false },
  ];

  return (
    <svg
      viewBox="0 0 500 230"
      className="w-full max-w-[500px] mx-auto block"
      aria-label="gh-pages branch file tree showing production files at root and staging files in staging/ subdirectory"
      role="img"
    >
      <rect x="0" y="0" width="500" height="230" rx="12" className="fill-surface stroke-border" strokeWidth="1.5" />
      {/* title bar */}
      <rect x="0" y="0" width="500" height="36" rx="12" className="fill-bg-alt" />
      <rect x="0" y="24" width="500" height="12" className="fill-bg-alt" />
      <circle cx="20" cy="18" r="5" fill="#ff5f57" />
      <circle cx="38" cy="18" r="5" fill="#febc2e" />
      <circle cx="56" cy="18" r="5" fill="#28c840" />
      <text x="250" y="23" textAnchor="middle" fontSize="10" className="fill-text-muted font-mono">gh-pages branch</text>

      {lines.map((line, i) => {
        const y = 58 + i * 20;
        const textX = 20 + line.indent * 14;
        return (
          <g key={i}>
            <text
              x={textX}
              y={y}
              fontSize="11"
              fontFamily="'Fira Code', monospace"
              className={line.accent ? 'fill-accent' : 'fill-text-muted'}
            >
              {line.label}
            </text>
            {line.badge && (
              <>
                <rect
                  x={textX + line.label.length * 6.6 + 8}
                  y={y - 11}
                  width={line.badge === 'production' ? 62 : 50}
                  height={16}
                  rx={4}
                  className={
                    line.badge === 'production'
                      ? 'fill-[rgba(74,222,128,0.12)] stroke-green-400'
                      : 'fill-accent-dim stroke-accent'
                  }
                  strokeWidth="1"
                />
                <text
                  x={textX + line.label.length * 6.6 + (line.badge === 'production' ? 39 : 33)}
                  y={y}
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="'Fira Code', monospace"
                  className={line.badge === 'production' ? 'fill-green-400' : 'fill-accent'}
                >
                  {line.badge}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Inline SVG: Vite Build Output ───────────────────────────────────────────
function ViteBuildDiagram() {
  return (
    <svg
      viewBox="0 0 580 140"
      className="w-full max-w-[580px] mx-auto block"
      aria-label="Vite transforms TypeScript and CSS source files into hashed production bundles"
      role="img"
    >
      {/* Input side */}
      <text x="90" y="18" textAnchor="middle" fontSize="10" className="fill-text-muted font-sans" fontWeight="600">Source files</text>
      {[
        { label: 'App.tsx', y: 36 },
        { label: 'components/*.tsx', y: 60 },
        { label: 'globals.css', y: 84 },
        { label: 'data/*.ts', y: 108 },
      ].map(({ label, y }) => (
        <g key={label}>
          <rect x="12" y={y - 13} width="156" height="22" rx="6" className="fill-surface stroke-border" strokeWidth="1.2" />
          <text x="90" y={y} textAnchor="middle" fontSize="10" fontFamily="'Fira Code', monospace" className="fill-text-muted">{label}</text>
        </g>
      ))}

      {/* Arrow */}
      <line x1="172" y1="72" x2="228" y2="72" className="stroke-accent" strokeWidth="2" markerEnd="url(#arr-v)" />
      <rect x="180" y="58" width="40" height="28" rx="6" className="fill-surface stroke-accent" strokeWidth="1.5" />
      <text x="200" y="70" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-accent font-sans">Vite</text>
      <text x="200" y="82" textAnchor="middle" fontSize="8" className="fill-text-muted font-mono">build</text>

      {/* Output side */}
      <text x="400" y="18" textAnchor="middle" fontSize="10" className="fill-text-muted font-sans" fontWeight="600">dist/ output</text>
      {[
        { label: 'index.html', y: 36, accent: true },
        { label: 'assets/index-[hash].js', y: 60, accent: false },
        { label: 'assets/index-[hash].css', y: 84, accent: false },
        { label: 'favicon.svg', y: 108, accent: false },
      ].map(({ label, y, accent }) => (
        <g key={label}>
          <rect x="240" y={y - 13} width="192" height="22" rx="6" className={`fill-surface ${accent ? 'stroke-accent' : 'stroke-border'}`} strokeWidth="1.2" />
          <text x="336" y={y} textAnchor="middle" fontSize="10" fontFamily="'Fira Code', monospace" className={accent ? 'fill-accent' : 'fill-text-muted'}>{label}</text>
        </g>
      ))}

      {/* Size callout */}
      <text x="460" y="72" fontSize="10" className="fill-text-muted font-mono">~160KB</text>
      <text x="460" y="87" fontSize="9" className="fill-text-muted font-mono">gzipped</text>

      <defs>
        <marker id="arr-v" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-accent" />
        </marker>
      </defs>
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function TechStack() {
  return (
    <section id="techstack" className="section section-alt">
      <div className="container">
        <h2 className="section-title text-[1.75rem] font-semibold mb-4 flex items-center gap-3">
          <span className="font-mono text-accent text-[1rem] font-normal">05.</span> How This Website Was Designed
        </h2>
        <p className="text-text-muted text-[1.02rem] mb-14 max-w-[680px]">
          A deep dive into every layer of this site — from the React components you're looking at,
          through the Vite build pipeline, through GitHub Actions CI/CD, all the way to the static
          files served by GitHub Pages.
        </p>

        {/* ── Architecture Overview ── */}
        <div className="mb-20">
          <h3 className="text-[1.15rem] font-semibold mb-2 flex items-center gap-2">
            <Layers size={18} className="text-accent" strokeWidth={1.5} />
            Architecture Overview
          </h3>
          <p className="text-text-muted text-[0.9rem] mb-6 max-w-[620px]">
            There is no server. A visitor's browser makes an HTTPS request directly to GitHub's CDN,
            which returns pre-built static files. Everything dynamic — animations, theme switching,
            smooth scrolling — runs entirely in the browser.
          </p>
          <motion.div
            className="bg-surface border border-border rounded-[14px] p-6 overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <ArchDiagram />
            <p className="text-center text-text-muted font-mono text-[0.72rem] mt-4 tracking-wide">
              Request flow: Browser → GitHub Pages CDN → gh-pages branch static files
            </p>
          </motion.div>
        </div>

        {/* ── Stack Cards ── */}
        <div className="mb-20">
          <h3 className="text-[1.15rem] font-semibold mb-2">The Full Stack</h3>
          <p className="text-text-muted text-[0.9rem] mb-6 max-w-[620px]">
            Each tool was chosen deliberately. Click any card to visit the official docs.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 md:grid-cols-1">
            {stackItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-[14px] p-7 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_var(--color-accent-dim)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.06 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-dim flex items-center justify-center shrink-0">
                      <item.Icon size={18} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-semibold text-[0.95rem]">{item.name}</span>
                      {item.version && (
                        <span className="font-mono text-[0.7rem] text-text-muted ml-2 bg-bg-alt px-1.5 py-0.5 rounded">{item.version}</span>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-[0.68rem] text-accent uppercase tracking-[1.5px] shrink-0">{item.role}</span>
                </div>

                {/* Detail */}
                <p className="text-text-muted text-[0.88rem] leading-[1.7]">{item.detail}</p>

                {/* Bullets */}
                <ul className="flex flex-col gap-1.5 border-t border-border pt-4">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[0.82rem] text-text-muted leading-[1.5]">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Build Pipeline ── */}
        <div className="mb-20">
          <h3 className="text-[1.15rem] font-semibold mb-2 flex items-center gap-2">
            <Layers size={18} className="text-accent" strokeWidth={1.5} />
            Build Pipeline
          </h3>
          <p className="text-text-muted text-[0.9rem] mb-8 max-w-[620px]">
            What happens between writing a line of code and a visitor seeing it in their browser.
          </p>

          {/* Vite build visual */}
          <motion.div
            className="bg-surface border border-border rounded-[14px] p-6 mb-8 overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-[0.78rem] font-mono text-text-muted uppercase tracking-wider mb-4">What Vite does to your source files</p>
            <ViteBuildDiagram />
          </motion.div>

          {/* gh-pages file tree + branch diagram side by side */}
          <div className="grid grid-cols-2 gap-5 mb-8 md:grid-cols-1">
            <motion.div
              className="bg-surface border border-border rounded-[14px] p-6 overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-[0.78rem] font-mono text-text-muted uppercase tracking-wider mb-4">gh-pages branch layout</p>
              <FileTreeDiagram />
              <p className="text-[0.78rem] text-text-muted mt-3 leading-[1.6]">
                Both environments live on the same branch.{' '}
                <span className="text-accent font-mono">keep_files: true</span> in each workflow
                prevents one deploy from deleting the other's directory.
              </p>
            </motion.div>
            <motion.div
              className="bg-surface border border-border rounded-[14px] p-6 overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            >
              <p className="text-[0.78rem] font-mono text-text-muted uppercase tracking-wider mb-4">branch → environment mapping</p>
              <BranchDiagram />
              <p className="text-[0.78rem] text-text-muted mt-3 leading-[1.6]">
                Feature branches auto-deploy to staging on every push. Merging to master triggers
                the production deploy. No manual steps.
              </p>
            </motion.div>
          </div>

          {/* Step-by-step timeline */}
          <div className="flex flex-col">
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-6 pb-8 relative last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: i * 0.07 }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-surface border-2 border-accent flex items-center justify-center shrink-0">
                    <span className="font-mono text-[0.7rem] font-bold text-accent">{step.num}</span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-1" />
                  )}
                </div>
                <div className="pb-2 pt-1 flex-1">
                  <h4 className="font-semibold text-[0.95rem] mb-0.5">{step.title}</h4>
                  <p className="text-accent font-mono text-[0.78rem] mb-2">{step.description}</p>
                  <p className="text-text-muted text-[0.88rem] leading-[1.65] mb-3">{step.detail}</p>
                  {step.code && (
                    <pre className="bg-bg border border-border rounded-lg px-4 py-3 font-mono text-[0.78rem] text-text-muted overflow-x-auto leading-[1.7] whitespace-pre">
                      {step.code}
                    </pre>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CI/CD Environments ── */}
        <div className="mb-20">
          <h3 className="text-[1.15rem] font-semibold mb-2 flex items-center gap-2">
            <GitBranch size={18} className="text-accent" strokeWidth={1.5} />
            CI / CD Environments
          </h3>
          <p className="text-text-muted text-[0.9rem] mb-6 max-w-[620px]">
            Two GitHub Actions workflows, two environments. Changes can be previewed on staging
            before they reach production.
          </p>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
            {ciCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={[
                  'bg-surface border rounded-[14px] p-7 flex flex-col gap-5',
                  card.label === 'Production' ? 'border-green-400/30' : 'border-border',
                ].join(' ')}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-center gap-2">
                  <span className={[
                    'inline-block w-2.5 h-2.5 rounded-full',
                    card.label === 'Production' ? 'bg-green-400' : 'bg-yellow-400',
                  ].join(' ')} />
                  <span className="font-bold text-[1rem]">{card.label}</span>
                </div>

                {/* Trigger */}
                <div>
                  <p className="font-mono text-[0.68rem] text-text-muted uppercase tracking-[1.5px] mb-1">Trigger</p>
                  <p className="font-semibold text-[0.88rem] mb-1">{card.trigger}</p>
                  <p className="text-text-muted text-[0.82rem] leading-[1.5]">{card.triggerDetail}</p>
                </div>

                {/* Steps */}
                <div>
                  <p className="font-mono text-[0.68rem] text-text-muted uppercase tracking-[1.5px] mb-2">Workflow steps</p>
                  <ol className="flex flex-col gap-1.5">
                    {card.steps.map((s, j) => (
                      <li key={j} className="flex gap-2.5 text-[0.82rem] text-text-muted">
                        <span className="font-mono text-accent shrink-0">{j + 1}.</span>
                        <span className={s.startsWith('VITE') ? 'font-mono text-accent' : ''}>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Build env */}
                {card.buildEnv && (
                  <div>
                    <p className="font-mono text-[0.68rem] text-text-muted uppercase tracking-[1.5px] mb-1.5">Build environment variable</p>
                    <code className="font-mono text-[0.82rem] text-accent bg-accent-dim px-3 py-1.5 rounded-lg inline-block">
                      {card.buildEnv}
                    </code>
                    <p className="text-text-muted text-[0.78rem] mt-2 leading-[1.5]">
                      Vite bakes this into all asset URLs at build time, so{' '}
                      <span className="font-mono text-accent">/assets/…</span> becomes{' '}
                      <span className="font-mono text-accent">/staging/assets/…</span>.
                    </p>
                  </div>
                )}

                {/* Deploy target */}
                <div>
                  <p className="font-mono text-[0.68rem] text-text-muted uppercase tracking-[1.5px] mb-1">Deploy target</p>
                  <p className="font-semibold text-[0.88rem] mb-1">{card.deployTarget}</p>
                  <p className="text-text-muted text-[0.82rem] leading-[1.5]">{card.deployDetail}</p>
                </div>

                {/* URL */}
                <div className="border-t border-border pt-4">
                  <p className="font-mono text-[0.68rem] text-text-muted uppercase tracking-[1.5px] mb-1">Live URL</p>
                  <p className="font-mono text-[0.88rem] text-accent">{card.url}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Design Decisions ── */}
        <div>
          <h3 className="text-[1.15rem] font-semibold mb-2 flex items-center gap-2">
            <HelpCircle size={18} className="text-accent" strokeWidth={1.5} />
            Design Decisions
          </h3>
          <p className="text-text-muted text-[0.9rem] mb-6 max-w-[620px]">
            The "why" behind the major architectural choices.
          </p>
          <div className="flex flex-col gap-4">
            {designDecisions.map((d, i) => (
              <motion.div
                key={i}
                className="bg-surface border border-border rounded-[14px] p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.06 }}
              >
                <div className="flex gap-3 mb-3">
                  <ArrowRight size={16} className="text-accent mt-0.5 shrink-0" strokeWidth={2} />
                  <h4 className="font-semibold text-[0.95rem]">{d.question}</h4>
                </div>
                <p className="text-text-muted text-[0.88rem] leading-[1.7] mb-3 ml-7">{d.answer}</p>
                <div className="ml-7 flex gap-2 items-start">
                  <span className="font-mono text-[0.68rem] text-text-muted uppercase tracking-[1.5px] mt-0.5 shrink-0">Tradeoff</span>
                  <p className="text-text-muted text-[0.82rem] leading-[1.6] border-l border-border pl-3">{d.tradeoff}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

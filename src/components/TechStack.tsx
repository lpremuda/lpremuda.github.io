import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { stackItems, pipelineSteps, ciCards } from '../data/techstack';

export default function TechStack() {
  return (
    <section id="techstack" className="section">
      <div className="container">
        <h2 className="section-title text-[1.75rem] font-semibold mb-14 flex items-center gap-3">
          <span className="font-mono text-accent text-[1rem] font-normal">05.</span> Tech Stack
        </h2>

        {/* Stack cards */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-20 md:grid-cols-1">
          {stackItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border border-border rounded-[14px] p-7 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_var(--color-accent-dim)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.07 }}
            >
              <div className="flex items-center gap-3">
                <item.Icon size={22} className="text-accent shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="font-semibold text-[0.95rem]">{item.name}</span>
                  {item.version && (
                    <span className="font-mono text-[0.72rem] text-text-muted ml-2">{item.version}</span>
                  )}
                </div>
              </div>
              <p className="font-mono text-[0.72rem] text-accent uppercase tracking-[1px]">{item.role}</p>
              <p className="text-text-muted text-[0.88rem] leading-[1.65]">{item.detail}</p>
            </motion.a>
          ))}
        </div>

        {/* Build pipeline */}
        <div className="mb-20">
          <h3 className="text-[1.2rem] font-semibold mb-8 flex items-center gap-2">
            <Layers size={20} className="text-accent" strokeWidth={1.5} />
            Build Pipeline
          </h3>
          <div className="flex flex-col gap-0">
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-6 pb-8 relative last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 }}
              >
                {/* Connector line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-surface border-2 border-accent flex items-center justify-center shrink-0">
                    <span className="font-mono text-[0.72rem] font-semibold text-accent">{step.num}</span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-1 mb-[-1px]" />
                  )}
                </div>
                <div className="pb-2 pt-1.5">
                  <h4 className="font-semibold text-[0.95rem] mb-1.5">{step.title}</h4>
                  <p className="text-text-muted text-[0.88rem] leading-[1.65]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CI/CD cards */}
        <div>
          <h3 className="text-[1.2rem] font-semibold mb-8">CI / CD Environments</h3>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
            {ciCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="bg-surface border border-border rounded-[14px] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={[
                    'inline-block w-2 h-2 rounded-full',
                    card.label === 'Production' ? 'bg-green-400' : 'bg-yellow-400',
                  ].join(' ')} />
                  <span className="font-semibold text-[1rem]">{card.label}</span>
                </div>
                <dl className="flex flex-col gap-3">
                  <div>
                    <dt className="font-mono text-[0.72rem] text-text-muted uppercase tracking-[1px] mb-0.5">Trigger</dt>
                    <dd className="text-[0.88rem]">{card.trigger}</dd>
                  </div>
                  {card.buildEnv && (
                    <div>
                      <dt className="font-mono text-[0.72rem] text-text-muted uppercase tracking-[1px] mb-0.5">Build env</dt>
                      <dd className="font-mono text-[0.82rem] text-accent bg-accent-dim px-2 py-1 rounded inline-block">{card.buildEnv}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-mono text-[0.72rem] text-text-muted uppercase tracking-[1px] mb-0.5">Deploy target</dt>
                    <dd className="text-[0.88rem]">{card.deployTarget}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.72rem] text-text-muted uppercase tracking-[1px] mb-0.5">URL</dt>
                    <dd className="font-mono text-[0.82rem] text-accent">{card.url}</dd>
                  </div>
                </dl>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

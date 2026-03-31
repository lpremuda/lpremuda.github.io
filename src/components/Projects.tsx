import { motion } from 'framer-motion';
import { Folder, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title text-[1.75rem] font-semibold mb-14 flex items-center gap-3">
          <span className="font-mono text-accent text-[1rem] font-normal">04.</span> Projects
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-12 md:grid-cols-1">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-surface border border-border rounded-[14px] p-7 flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-[5px] hover:border-accent hover:shadow-[0_10px_30px_var(--color-accent-dim)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <Folder className="text-accent" size={36} strokeWidth={1.5} />
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-0.5"
                  >
                    <Github size={20} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-0.5"
                    >
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-[1rem] font-semibold">{project.title}</h3>
              <p className="text-text-muted text-[0.88rem] leading-[1.65] flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/lpremuda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View All on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-[6px]">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title text-[1.75rem] font-semibold mb-14 flex items-center gap-3">
          <span className="font-mono text-accent text-[1rem] font-normal">03.</span> Skills
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 md:grid-cols-2 sm:grid-cols-1">
          {skills.map((category, i) => (
            <motion.div
              key={category.name}
              className="skill-card bg-surface border border-border rounded-[14px] px-6 py-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_var(--color-accent-dim)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 }}
            >
              <div className="text-accent mb-4">
                <category.Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[0.95rem] font-semibold mb-3.5">{category.name}</h3>
              <ul className="flex flex-col gap-2">
                {category.items.map(item => (
                  <li key={item} className="text-[0.88rem] text-text-muted pl-3.5 relative">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

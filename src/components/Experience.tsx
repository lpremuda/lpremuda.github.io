import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title text-[1.75rem] font-semibold mb-14 flex items-center gap-3">
          <span className="font-mono text-accent text-[1rem] font-normal">02.</span> Experience
        </h2>
        <div className="timeline relative flex flex-col">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="flex gap-8 pb-12 relative last:pb-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
            >
              <div className="timeline-dot shrink-0 w-[31px] h-[31px] rounded-full border-2 border-accent bg-bg-alt relative z-[1] mt-1 md:w-[23px] md:h-[23px]" />
              <div className="flex-1 bg-surface border border-border rounded-[14px] p-7 transition-colors duration-200 hover:border-accent">
                <div className="flex justify-between items-start mb-3.5 gap-4 flex-wrap">
                  <div>
                    <h3 className="text-[1.05rem] font-semibold mb-1">{job.role}</h3>
                    <p className="text-accent text-[0.88rem] font-mono">{job.company}</p>
                  </div>
                  <span className="font-mono text-[0.78rem] text-text-muted whitespace-nowrap pt-1">{job.date}</span>
                </div>
                <p className="text-text-muted text-[0.95rem] mb-[18px]">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

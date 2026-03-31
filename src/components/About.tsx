import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title text-[1.75rem] font-semibold mb-14 flex items-center gap-3">
          <span className="font-mono text-accent text-[1rem] font-normal">01.</span> About Me
        </h2>
        <div className="grid grid-cols-[1fr_300px] gap-[60px] items-start lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-text-muted mb-5 text-[1.02rem]">
              I'm a full-stack software engineer with a passion for building clean, performant software and
              continuously sharpening my craft. I enjoy working across the entire stack — designing REST APIs,
              architecting reactive systems, and crafting intuitive user interfaces.
            </p>
            <p className="text-text-muted mb-5 text-[1.02rem]">
              I graduated from <strong className="text-text font-medium">UC Santa Barbara</strong> and have since worked across a range of technologies
              and domains. At Intuit, I contribute to products used by millions of people, working on complex distributed
              systems and frontend experiences alike.
            </p>
            <p className="text-text-muted mb-5 text-[1.02rem]">
              Outside of work, I explore new languages and paradigms — from functional programming in Scala to
              reactive streams in Kotlin — and I enjoy turning side project ideas into real, deployed applications.
            </p>
          </motion.div>

          <motion.div
            className="bg-surface border border-border rounded-[14px] p-8 flex flex-col items-center gap-6 lg:flex-row md:flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          >
            <div className="w-24 h-24 rounded-full bg-[linear-gradient(135deg,var(--color-accent-dim),var(--color-accent-glow))] border-2 border-accent flex items-center justify-center">
              <span className="font-mono text-2xl font-semibold text-accent">LP</span>
            </div>
            <ul className="w-full flex flex-col gap-3.5">
              <li className="flex items-center gap-2.5 text-[0.88rem] text-text-muted [&_svg]:shrink-0 [&_svg]:text-accent">
                <MapPin size={16} />
                Cardiff-by-the-Sea, CA
              </li>
              <li className="flex items-center gap-2.5 text-[0.88rem] text-text-muted [&_svg]:shrink-0 [&_svg]:text-accent">
                <Briefcase size={16} />
                Software Engineer @ Intuit
              </li>
              <li className="flex items-center gap-2.5 text-[0.88rem] text-text-muted [&_svg]:shrink-0 [&_svg]:text-accent">
                <GraduationCap size={16} />
                UC Santa Barbara, 2009–2013
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">01.</span> About Me
        </h2>
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p>
              I'm a full-stack software engineer with a passion for building clean, performant software and
              continuously sharpening my craft. I enjoy working across the entire stack — designing REST APIs,
              architecting reactive systems, and crafting intuitive user interfaces.
            </p>
            <p>
              I graduated from <strong>UC Santa Barbara</strong> and have since worked across a range of technologies
              and domains. At Intuit, I contribute to products used by millions of people, working on complex distributed
              systems and frontend experiences alike.
            </p>
            <p>
              Outside of work, I explore new languages and paradigms — from functional programming in Scala to
              reactive streams in Kotlin — and I enjoy turning side project ideas into real, deployed applications.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          >
            <div className="about-avatar">
              <div className="avatar-initials">LP</div>
            </div>
            <ul className="about-details">
              <li>
                <MapPin size={16} />
                Cardiff-by-the-Sea, CA
              </li>
              <li>
                <Briefcase size={16} />
                Software Engineer @ Intuit
              </li>
              <li>
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

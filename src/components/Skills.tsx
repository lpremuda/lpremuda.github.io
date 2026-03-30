import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">03.</span> Skills
        </h2>
        <div className="skills-grid">
          {skills.map((category, i) => (
            <motion.div
              key={category.name}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 }}
            >
              <div className="skill-icon">
                <category.Icon size={28} strokeWidth={1.5} />
              </div>
              <h3>{category.name}</h3>
              <ul>
                {category.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

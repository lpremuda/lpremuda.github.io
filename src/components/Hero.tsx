import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!glowRef.current) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(88,166,255,0.12), transparent 60%)`;
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68',
      10
    );
    const target = document.getElementById('about');
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight, behavior: 'smooth' });
  };

  return (
    <section id="hero" onMouseMove={handleMouseMove}>
      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.p className="hero-greeting" variants={item}>Hi, I'm</motion.p>
        <motion.h1 className="hero-name" variants={item}>Lucas Premuda</motion.h1>
        <motion.h2 className="hero-title" variants={item}>Full-Stack Software Engineer</motion.h2>
        <motion.p className="hero-desc" variants={item}>
          I build scalable, well-crafted software — from reactive backends to polished frontends.
          Currently building at{' '}
          <a href="https://www.intuit.com" target="_blank" rel="noopener noreferrer">
            Intuit
          </a>
          .
        </motion.p>
        <motion.div className="hero-cta" variants={item}>
          <a href="#projects" className="btn btn-primary" onClick={e => {
            e.preventDefault();
            const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68', 10);
            const target = document.getElementById('projects');
            if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight, behavior: 'smooth' });
          }}>
            View My Work
          </a>
        </motion.div>
        <motion.div className="hero-social" variants={item}>
          <a href="https://github.com/lpremuda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={22} />
            GitHub
          </a>
          <a href="https://linkedin.com/in/lucas-premuda-151b1a65" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={22} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <div ref={glowRef} className="hero-glow" />

      <div className="scroll-indicator">
        <span>Scroll</span>
        <a href="#about" onClick={handleScrollClick} aria-label="Scroll to about">
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}

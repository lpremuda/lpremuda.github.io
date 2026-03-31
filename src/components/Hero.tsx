import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const NAV_HEIGHT = 68;

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
    const target = document.getElementById('about');
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative pt-[68px] px-10 overflow-hidden md:px-6"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="max-w-[1100px] mx-auto w-full relative z-[1]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="font-mono text-accent text-[1rem] mb-4" variants={item}>
          Hi, I'm
        </motion.p>
        <motion.h1
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-[-1px] mb-2"
          variants={item}
        >
          Lucas Premuda
        </motion.h1>
        <motion.h2
          className="text-[clamp(1.4rem,3.5vw,2.8rem)] font-medium text-text-muted leading-[1.2] mb-7"
          variants={item}
        >
          Full-Stack Software Engineer
        </motion.h2>
        <motion.p className="max-w-[540px] text-text-muted text-[1.05rem] mb-10" variants={item}>
          I build scalable, well-crafted software — from reactive backends to polished frontends.
          Currently building at{' '}
          <a
            href="https://www.intuit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border-b border-transparent transition-[border-color] duration-200 hover:border-accent"
          >
            Intuit
          </a>
          .
        </motion.p>
        <motion.div className="flex gap-4 flex-wrap sm:flex-col" variants={item}>
          <a
            href="#projects"
            className="btn btn-primary btn-large"
            onClick={e => {
              e.preventDefault();
              const target = document.getElementById('projects');
              if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT, behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
        </motion.div>
        <motion.div className="flex gap-5 mt-8" variants={item}>
          <a
            href="https://github.com/lpremuda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 text-text-muted font-mono text-[0.82rem] border border-border rounded-lg px-[14px] py-2 transition-all duration-200 hover:text-accent hover:border-accent hover:bg-accent-dim hover:-translate-y-0.5"
          >
            <Github size={22} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lucas-premuda-151b1a65"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 text-text-muted font-mono text-[0.82rem] border border-border rounded-lg px-[14px] py-2 transition-all duration-200 hover:text-accent hover:border-accent hover:bg-accent-dim hover:-translate-y-0.5"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <div
        ref={glowRef}
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 65%)' }}
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted font-mono text-[0.72rem] tracking-[1px] animate-[fadeInUp_0.6s_ease_forwards_1.1s,bobDown_2s_ease-in-out_infinite_1.5s] opacity-0">
        <span>Scroll</span>
        <a href="#about" onClick={handleScrollClick} aria-label="Scroll to about">
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}

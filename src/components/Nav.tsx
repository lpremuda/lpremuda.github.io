import { useState, useCallback } from 'react';
import { Sun, Moon, X } from 'lucide-react';
import { useScrolledNav } from '../hooks/useScrolledNav';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_HEIGHT = 68;

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#techstack' },
];

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'techstack'];

interface NavProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export default function Nav({ theme, onToggle }: NavProps) {
  const isScrolled = useScrolledNav();
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = '';
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  return (
    <>
      <nav
        id="nav"
        className={[
          'fixed top-0 left-0 right-0 h-[68px] z-[100] transition-all duration-[400ms]',
          isScrolled
            ? theme === 'dark'
              ? 'bg-[rgba(13,17,23,0.85)] backdrop-blur-[12px] shadow-[0_1px_0_var(--color-border)]'
              : 'bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px] shadow-[0_1px_0_var(--color-border)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-[1100px] mx-auto h-full px-10 flex items-center justify-between md:px-6">
          <a
            href="#hero"
            className="font-mono text-[1.2rem] font-semibold text-accent tracking-[1px] transition-opacity duration-200 hover:opacity-75"
            onClick={e => handleAnchorClick(e, '#hero')}
          >
            LP
          </a>
          <ul className="flex gap-9 items-center md:hidden">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={[
                    'font-mono text-[0.8rem] transition-colors duration-200 hover:text-accent',
                    activeSection === href.slice(1) ? 'text-accent' : 'text-text-muted',
                  ].join(' ')}
                  onClick={e => handleAnchorClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="bg-transparent border border-border rounded-md text-text-muted cursor-pointer px-2 py-1.5 flex items-center ml-4 transition-colors duration-200 hover:text-accent hover:border-accent"
            onClick={onToggle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="hidden md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 ml-3"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={20} className="text-text-muted" /> : (
              <>
                <span className="block w-[22px] h-[2px] bg-text-muted rounded-sm transition-all duration-200" />
                <span className="block w-[22px] h-[2px] bg-text-muted rounded-sm transition-all duration-200" />
                <span className="block w-[22px] h-[2px] bg-text-muted rounded-sm transition-all duration-200" />
              </>
            )}
          </button>
        </div>
      </nav>

      <div
        className={['fixed inset-0 z-[90] bg-bg flex-col items-center justify-center', menuOpen ? 'flex' : 'hidden'].join(' ')}
        id="mobileMenu"
      >
        <ul className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[1.4rem] text-text-muted transition-colors duration-200 hover:text-accent"
                onClick={e => handleAnchorClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

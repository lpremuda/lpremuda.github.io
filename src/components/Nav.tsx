import { useState, useCallback } from 'react';
import { Sun, Moon, X } from 'lucide-react';
import { useScrolledNav } from '../hooks/useScrolledNav';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

const SECTION_IDS = ['about', 'experience', 'skills', 'projects'];

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
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68', 10);
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
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
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e => handleAnchorClick(e, '#hero')}>
            LP
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? 'active' : ''}
                  onClick={e => handleAnchorClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hamburger" onClick={toggleMenu} aria-label="Open menu">
            {menuOpen ? <X size={20} /> : (
              <>
                <span /><span /><span />
              </>
            )}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="mobile-link" onClick={e => handleAnchorClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

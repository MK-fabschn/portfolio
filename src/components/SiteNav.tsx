import { useEffect, useState } from 'react';
import Brand from './Brand';
import LangSwitch from './LangSwitch';
import type { LangLink } from '../i18n';

interface Props {
  logoSrc: string;
  role: string;
  links: { label: string; href: string }[];
  langLink: LangLink;
  labels: { home: string; mainNav: string; mainMenu: string; menu: string };
}

/** Home page navigation: always reachable, turns into a translucent layer once content scrolls under it. */
export default function SiteNav({ logoSrc, role, links, langLink, labels }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const className = ['site-nav', scrolled && 'is-scrolled', menuOpen && 'is-open'].filter(Boolean).join(' ');

  return (
    <div className={className}>
      <div className="wrap">
        <div className="site-header">
          <Brand logoSrc={logoSrc} role={role} homeLabel={labels.home} href="#top" />
          <div className="header-actions">
            <nav className="nav-links" aria-label={labels.mainNav}>
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <LangSwitch {...langLink} />
            <button
              type="button"
              className="nav-toggle"
              aria-label={labels.menu}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {/* Stays mounted so it can fade out along the path it came in on; hidden via CSS while closed. */}
      <nav id="nav-menu" className="nav-menu" aria-label={labels.mainMenu}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

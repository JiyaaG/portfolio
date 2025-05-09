'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  
  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuInstant = () => {
    setNoTransition(true);
    setIsMenuOpen(false);
    setTimeout(() => setNoTransition(false), 350);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <span className="logo-link">JIYAA</span>
        </Link>
      </div>
      <div className="header-spacer" />
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <nav className={`nav${isMenuOpen ? ' nav-open' : ''}${noTransition ? ' nav-no-transition' : ''}`}>
        <Link href="/about" className={`nav-link ${isActive('/about') ? 'active-link' : ''}`} onClick={closeMenuInstant}>ABOUT</Link>
        <Link href="/resume" className={`nav-link ${isActive('/resume') ? 'active-link' : ''}`} onClick={closeMenuInstant}>RESUME</Link>
        <Link href="/projects" className={`nav-link ${isActive('/projects') ? 'active-link' : ''}`} onClick={closeMenuInstant}>PROJECTS</Link>
        <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active-link' : ''}`} onClick={closeMenuInstant}>CONTACT</Link>
      </nav>
    </header>
  );
} 
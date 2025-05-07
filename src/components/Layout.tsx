import Head from 'next/head';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChildrenProps } from '../types';
import { useState } from 'react';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  
  const isActive = (path: string): boolean => {
    return router.pathname === path;
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
    <div className="layout">
      <Head>
        <title>Jiya Gidwani - Portfolio</title>
        <meta name="description" content="Jiya Gidwani's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      
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
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'active-link' : ''}`} onClick={closeMenuInstant}>
            ABOUT
          </Link>
          <Link href="/resume" className={`nav-link ${isActive('/resume') ? 'active-link' : ''}`} onClick={closeMenuInstant}>
            RESUME
          </Link>
          <Link href="/projects" className={`nav-link ${isActive('/projects') ? 'active-link' : ''}`} onClick={closeMenuInstant}>
            PROJECTS
          </Link>
          <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active-link' : ''}`} onClick={closeMenuInstant}>
            CONTACT
          </Link>
        </nav>
      </header>
      
      <main className="main">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 
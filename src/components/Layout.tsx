import Head from 'next/head';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChildrenProps } from '../types';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const router = useRouter();
  
  const isActive = (path: string): boolean => {
    return router.pathname === path;
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
        <nav className="nav">
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'active-link' : ''}`}>
            ABOUT
          </Link>
          <Link href="/resume" className={`nav-link ${isActive('/resume') ? 'active-link' : ''}`}>
            RESUME
          </Link>
          <Link href="/projects" className={`nav-link ${isActive('/projects') ? 'active-link' : ''}`}>
            PROJECTS
          </Link>
          <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active-link' : ''}`}>
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
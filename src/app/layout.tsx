import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import VisitorTracker from '@/components/VisitorTracker';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jiya Gidwani - Portfolio',
  description: 'Jiya Gidwani\'s Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        <div className="layout">
          <Header />
          <main className="main">
            <Sidebar />
            <div className="content">
              {children}
            </div>
          </main>
        </div>
        <VisitorTracker />
      </body>
    </html>
  );
} 
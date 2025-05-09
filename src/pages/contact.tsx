import Layout from '../components/Layout';
import { NextPage } from 'next';
import React, { useState } from 'react';

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

const Contact: NextPage = () => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const socialLinks: SocialLink[] = [
    { id: 1, platform: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
    { id: 2, platform: 'Instagram', url: 'https://instagram.com/_.jiyaa15', icon: 'fab fa-instagram' },
    { id: 3, platform: 'LinkedIn', url: 'https://linkedin.com/in/jiya-gidwani-53031b248/', icon: 'fab fa-linkedin' },
    { id: 4, platform: 'Phone', url: 'tel:8770779795', icon: 'fas fa-phone' },
    { id: 5, platform: 'Email', url: 'mailto:jiyaagidwani@gmail.com', icon: 'fas fa-envelope' },
  ];

  return (
    <Layout>
      <div className="content-container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* <h1 className="page-title">CONTACT</h1> */}
        <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            className={`flip-card${flipped || hovered ? ' flipped' : ''}`}
            tabIndex={0}
            onClick={() => setFlipped(f => !f)}
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setFlipped(f => !f); }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: '350px',
              maxWidth: '95vw',
              height: '250px',
              perspective: '1000px',
              cursor: 'pointer',
              borderRadius: '16px',
            }}
          >
            <div className="flip-card-inner" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s cubic-bezier(.4,2.3,.3,1)',
              transformStyle: 'preserve-3d',
              transform: (flipped || hovered) ? 'rotateY(180deg)' : 'none',
              borderRadius: '16px',
              boxSizing: 'border-box',
            }}>
              {/* Front Side */}
              <div className="flip-card-front" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: '#beb7b4',
                color: '#232136',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                textAlign: 'center',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}>
                <h1 style={{ fontSize: '1.5rem', marginBottom: 8, fontWeight: 700 }}>CONTACT</h1>
                <p style={{ color: '#6f5e5c', fontWeight: 500, fontSize: '1rem' }}>Click to flip for details</p>
              </div>
              {/* Back Side */}
              <div className="flip-card-back" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: '#e2ddd6',
                color: '#111',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                textAlign: 'center',
                transform: 'rotateY(180deg)',
                padding: '1.5rem 1rem',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}>
                <div style={{ width: '100%' }}>
                  <p style={{ margin: 0, fontSize: '1.08rem' }}>Feel free to get in touch. You can email me at:</p>
                  <p style={{ fontWeight: 700, fontSize: '1.15rem', margin: '1.1rem 0 2.2rem 0', wordBreak: 'break-all' }}>jiyaagidwani@gmail.com</p>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: 'auto' }}>
                  {socialLinks.map(link => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      style={{ color: '#6d504b', fontSize: 28 }}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <style>{`
              @media (max-width: 600px) {
                .flip-card {
                  width: 95vw !important;
                  height: 250px !important;
                }
                .flip-card-front, .flip-card-back {
                  width: 100% !important;
                  height: 100% !important;
                  min-height: 0 !important;
                  max-height: 100% !important;
                  box-sizing: border-box !important;
                  overflow: hidden !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 
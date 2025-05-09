'use client';

import React, { useState, useEffect } from 'react';

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export default function Contact() {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks: SocialLink[] = [
    { id: 1, platform: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
    { id: 2, platform: 'LinkedIn', url: 'https://linkedin.com/in/jiya-gidwani-53031b248/', icon: 'fab fa-linkedin' },
    { id: 3, platform: 'Phone', url: 'tel:8770779795', icon: 'fas fa-phone' },
    { id: 4, platform: 'Email', url: 'mailto:jiyaagidwani@gmail.com', icon: 'fas fa-envelope' },
  ];

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  return (
    <div className="content-container" style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'transparent',
      boxShadow: 'none',
      padding: 0
    }}>
      <div style={{ 
        flex: 1, 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '2rem'
      }}>
        <div
          className={`flip-card${flipped || hovered ? ' flipped' : ''}`}
          tabIndex={0}
          onClick={() => setFlipped(f => !f)}
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setFlipped(f => !f); }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: '450px',
            maxWidth: '95vw',
            height: '300px',
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
              <h1 style={{ fontSize: '1.8rem', marginBottom: 12, fontWeight: 700 }}>Connect With Me! 🌟</h1>
              <p style={{ color: '#6f5e5c', fontWeight: 500, fontSize: '1.1rem' }}>Don't just stare, click to flip me! ✨</p>
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
              padding: '2rem',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.2rem',
                flex: 1,
              }}>
                <h2 style={{ 
                  fontSize: '1.4rem', 
                  margin: 0, 
                  color: '#232136',
                  fontWeight: 600 
                }}>Let's Get in Touch!</h2>
                <p style={{ 
                  margin: 0, 
                  fontSize: '1.1rem',
                  color: '#444',
                  fontWeight: 500
                }}>Drop me an email at:</p>
                <a 
                  href="mailto:jiyaagidwani@gmail.com"
                  style={{ 
                    fontWeight: 600, 
                    fontSize: '1.2rem', 
                    color: '#232136',
                    textDecoration: 'none',
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.color = '#111';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.color = '#232136';
                  }}
                >
                  jiyaagidwani@gmail.com
                </a>
                <div style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '2.5rem', 
                  marginTop: '1.2rem',
                  background: 'rgba(255,255,255,0.3)',
                  padding: '1rem',
                  borderRadius: '12px'
                }} className="social-icons">
                  {socialLinks.map(link => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      style={{ 
                        color: '#6d504b', 
                        fontSize: 28,
                        transition: 'all 0.2s',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.color = '#232136';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.color = '#6d504b';
                      }}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
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
                padding: 1rem !important;
              }
              .flip-card-back h2 {
                font-size: 1.2rem !important;
                margin: 0 !important;
              }
              .flip-card-back p {
                font-size: 0.9rem !important;
                margin: 0 !important;
              }
              .flip-card-back a {
                font-size: 1rem !important;
                padding: 0.3rem 0.8rem !important;
              }
              .social-icons {
                gap: 1.2rem !important;
                padding: 0.8rem !important;
                margin-top: 1.2rem !important;
              }
              .social-icons a {
                font-size: 24px !important;
                width: 35px !important;
                height: 35px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
} 
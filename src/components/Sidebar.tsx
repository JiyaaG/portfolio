'use client';

import Link from 'next/link';
import Image from 'next/image';

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export default function Sidebar() {
  const socialLinks: SocialLink[] = [
    { 
      id: 1, 
      platform: "GitHub", 
      url: "https://github.com", 
      icon: "fab fa-github" 
    },
    
    { 
      id: 3, 
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/jiya-gidwani-53031b248/", 
      icon: "fab fa-linkedin" 
    },
    { 
      id: 4, 
      platform: "Phone", 
      url: "tel:8770779795", 
      icon: "fas fa-phone" 
    },
    { 
      id: 5, 
      platform: "Email", 
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=jiyaagidwani@gmail.com", 
      icon: "fas fa-envelope" 
    }
  ];

  return (
    <div className="sidebar">
      <div className="profile-image">
        <Image
          src="/profile.jpg"
          alt="Jiya Gidwani"
          width={150}
          height={150}
          className="avatar"
        />
      </div>
      
      <h1 className="name">JIYA GIDWANI</h1>
      
      <p className="email">JIYAAGIDWANI@GMAIL.COM</p>
      
      <div className="about-short">
        <h2>ABOUT</h2>
        <p>
          Hi, I&#39;m Jiya. I&#39;m Full Stack Developer Intern currently based in Bangalore and working at Demand Xpress, Hyderabad, India.
        </p>
        <Link href="/about">
          <button className="learn-more">LEARN MORE</button>
        </Link>
      </div>
      
      <div className="social-icons">
        {socialLinks.map(link => (
          <a 
            key={link.id}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label={link.platform}
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

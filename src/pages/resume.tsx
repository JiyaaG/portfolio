import Layout from '../components/Layout';
import { NextPage } from 'next';
import { useState } from 'react';

const Resume: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string>('EXPERIENCE');
  
  const skillsList = [
    'HTML/CSS', 'JavaScript', 'Typescript', 'ReactJS', 'NodeJS', 
    'NestJS', 'Figma', 'MongoDB', 'Responsive Web Design', 
    'OOPs', 'Version Control (Git)', 'NextJS', 'Redux', 'Java'
  ];

  const skillPalette = {
    3: '#d6c4b6',
    4: '#caa898',
    5: '#9e8d83',
  };

  const skills = [
    // Front-end
    { name: 'HTML/CSS', score: 5 },
    { name: 'ReactJS', score: 5 },
    { name: 'NextJS', score: 5 },
    { name: 'Typescript', score: 4 },
    { name: 'Responsive Web Design', score: 4 },
    { name: 'Redux', score: 3 },
    { name: 'Figma', score: 3 },
    // Backend
    { name: 'NodeJS', score: 5 },
    { name: 'NestJS', score: 3 },
    { name: 'OOPs', score: 3 },
    { name: 'Java', score: 3 },
    // Database
    { name: 'MongoDB', score: 4 },
    // Tools
    { name: 'Version Control (Git)', score: 4 },
  ];

  return (
    <Layout>
      <div className="content-container" style={{ position: 'relative' }}>
        <a
          href="https://drive.google.com/file/d/1up9fL7zAU7iqXuQUlhG9iVyRn90XXUgZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume (PDF)"
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            zIndex: 10,
            color: '#888',
            fontSize: 22,
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '50%',
            padding: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'background 0.2s, color 0.2s',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className="fas fa-download" aria-hidden="true"></i>
        </a>
        <h1 className="page-title">RESUME</h1>
        
        <div className="resume-nav">
          <button 
            className={`resume-nav-item ${activeSection === 'EXPERIENCE' ? 'active' : ''}`}
            onClick={() => setActiveSection('EXPERIENCE')}
          >
            EXPERIENCE
          </button>
          <button 
            className={`resume-nav-item ${activeSection === 'SKILLS' ? 'active' : ''}`}
            onClick={() => setActiveSection('SKILLS')}
          >
            SKILLS
          </button>
          <button 
            className={`resume-nav-item ${activeSection === 'EDUCATION' ? 'active' : ''}`}
            onClick={() => setActiveSection('EDUCATION')}
          >
            EDUCATION
          </button>
        </div>
        
        {activeSection === 'EXPERIENCE' && (
          <div className="resume-section">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="experience-item">
              <h3>FullStack Developer Intern</h3>
              <p>Demand Xpress, Hyderabad, India</p>
              <p>2025 - PRESENT</p>
              
              <ul>
                <li>Designed and developed a complete website for the company using React.js, HTML, CSS, and JavaScript.</li>
                <li>Created a fully responsive and mobile-friendly UI to ensure a seamless user experience across all devices.</li>
                <li>Optimized performance, ensuring fast load times and smooth navigation.</li>
                <li>Added blog posting functionality with CRUD</li>
                <li>Conducted rigorous testing and debugging to maintain website stability and efficiency.</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeSection === 'SKILLS' && (
          <div className="resume-section">
            <h2 className="section-title">SKILLS</h2>
            <ul className="skills-list" style={{ flexWrap: 'wrap', gap: '0.7rem', marginBottom: '2rem' }}>
              {skillsList.map((skill, index) => (
                <li key={index} style={{
                  background: '#f5f5f5',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  color: '#232136',
                  fontWeight: 600,
                  margin: 0,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                }}>{skill}</li>
              ))}
            </ul>
            <ul className="skills-list" style={{ flexDirection: 'column', gap: '1.2rem', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
              {skills.map((skill, index) => (
                <li key={index} style={{
                  background: '#f5f5f5',
                  padding: '0.7rem 1.1rem',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  color: '#232136',
                  fontWeight: 600,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                  margin: 0,
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{skill.name}</span>
                    <span style={{ fontSize: '0.95rem', color: '#888', marginLeft: '1rem' }}>{skill.score}/5</span>
                  </div>
                  <div style={{
                    marginTop: '0.4rem',
                    width: '100%',
                    height: '10px',
                    background: '#e0e0e0',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                  }}>
                    <div style={{
                      width: `${(skill.score / 5) * 100}%`,
                      height: '100%',
                      background: skillPalette[skill.score as keyof typeof skillPalette],
                      borderRadius: '4px',
                      transition: 'width 0.5s',
                    }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeSection === 'EDUCATION' && (
          <div className="resume-section">
            <h2 className="section-title">EDUCATION</h2>
            <div className="education-item">
              <h3>MEDI-CAPS UNIVERSITY</h3>
              <p>Masters in Computer Application</p>
              <p>2023 - 2025</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Resume; 
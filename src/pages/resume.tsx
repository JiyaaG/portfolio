import Layout from '../components/Layout';
import { NextPage } from 'next';
import { useState } from 'react';

const Resume: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string>('EDUCATION');
  
  const skills = [
    'HTML/CSS', 'JavaScript', 'Typescript', 'ReactJS', 'NodeJS', 
    'NestJS', 'Figma', 'MongoDB', 'Responsive Web Design', 
    'OOPs', 'Version Control (Git)', 'NextJS', 'Redux'
  ];

  return (
    <Layout>
      <div className="content-container">
        <h1 className="page-title">RESUME</h1>
        
        <div className="resume-nav">
          <button 
            className={`resume-nav-item ${activeSection === 'EDUCATION' ? 'active' : ''}`} 
            onClick={() => setActiveSection('EDUCATION')}
          >
            EDUCATION
          </button>
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
        </div>
        
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
        
        {activeSection === 'EXPERIENCE' && (
          <div className="resume-section">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="experience-item">
              <h3>FullStack Developer Intern</h3>
              <p>Demand-Xpress, Hyderabad, India</p>
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
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Resume; 
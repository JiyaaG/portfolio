import Layout from '../components/Layout';
import { NextPage } from 'next';

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

const Contact: NextPage = () => {
  const socialLinks: SocialLink[] = [
    { 
      id: 1, 
      platform: "GitHub", 
      url: "https://github.com", 
      icon: "fab fa-github" 
    },
    { 
      id: 2, 
      platform: "Instagram", 
      url: "https://instagram.com/_.jiyaa15", 
      icon: "fab fa-instagram" 
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
    <Layout>
      <div className="content-container">
        <h1 className="page-title">CONTACT</h1>
        
        <div className="contact-content">
          <p>Feel free to get in touch. You can email me at:</p>
          <p>You can contact me at jiyaagidwani@gmail.com.</p>
          
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
      </div>
    </Layout>
  );
};

export default Contact; 
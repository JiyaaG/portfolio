import Layout from '../components/Layout';
import { NextPage } from 'next';
import Image from 'next/image';


interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const Projects: NextPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Demand Xpress",
      date: "January, 2025",
      description: "A complete company website built as a Full Stack Developer Intern using React.js, HTML, CSS, and TypeScript. Features a fully responsive UI with smooth animations and all the key elements of a marketing website for a cohesive and engaging user experience.",
      imageUrl: "/demand-xpress-cover.jpg",
      link: "https://demandxpress.com"
    },
    {
      id: 2,
      title: "SOULIFY",
      date: "March, 2025",
      description: "A responsive mental wellness web app where I built the frontend using React, Tailwind CSS, and Redux, featuring a calming UI with smooth animations and scroll-based transitions to enhance user engagement.",
      imageUrl: "/soulify-cover.jpg",
      link: "https://soulify-rouge.vercel.app"
    },
    {
      id: 3,
      title: "POKEDEX",
      date: "April, 2025",
      description: "A modern Pokédex web app built with Next.js, allowing users to search and explore Pokémon with detailed stats, images, and a fully responsive design.",
      imageUrl: "/pokedex-cover.jpg",
      link: "https://pokedex-alpha-rust.vercel.app/"
    }
  ];

  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    const parseDate = (str: string) => new Date(str.replace(/,/g, ''));
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return (
    <Layout>
      <div className="content-container">
        <h1 className="page-title">PROJECTS</h1>
        <p className="subtitle">CRAFTED WITH CODE, CURIOSITY, AND COFFEE</p>
        
        {sortedProjects.map(project => (
          <div className="project" key={project.id}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-date">{project.date}</p>
            <div className="project-image-container">
            <Image
  src={project.imageUrl}
  alt={project.title}
  width={500}
  height={300}
  className="project-image"
  layout="responsive"
/>

            </div>
            <p className="project-description">{project.description}</p>
            {project.link && (
              <p className="project-link">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects; 
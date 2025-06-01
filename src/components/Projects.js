import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaTasks, FaGamepad, FaBook } from 'react-icons/fa';

const iconMap = {
  'To-Do App in Python': <FaTasks />,
  'Number Guessing Game in Python': <FaGamepad />,
  'Hotel Menu in Python': <FaBook />
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://portfoliobackend-mxoq.onrender.com/1/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className={`project-card project-${index}`} key={project.id}>
            <div className="project-icon">
              {iconMap[project.title] || <FaTasks />}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">• {project.description}</p>
            <p className="project-tech">{project.technologies}</p>
            <a href={project.link || '#'} className="project-link">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

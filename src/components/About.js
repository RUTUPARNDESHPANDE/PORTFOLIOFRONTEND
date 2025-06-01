import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.css';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [activeTab, setActiveTab] = useState('Skills');

  useEffect(() => {
    // Fetch About
    axios.get('https://portfoliobackend-mxoq.onrender.com/api/about')
      .then(response => setAboutData(response.data[0]))
      .catch(error => console.error('Error fetching About:', error));

    // Fetch Skills
    axios.get('https://portfoliobackend-mxoq.onrender.com/api/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching Skills:', error));

    // Fetch Education
    axios.get('https://portfoliobackend-mxoq.onrender.com/api/education')
      .then(response => setEducation(response.data))
      .catch(error => console.error('Error fetching Education:', error));
  }, []);

  const renderTabContent = () => {
    if (activeTab === 'Skills') {
      return (
        <div className="skills-grid">
          {skills.length === 0 ? (
            <p>Skills Loading.....</p>
          ) : (
            skills.map(skill => (
              <div key={skill.id} className="skill-card">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level*10}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level*10}%</span>
              </div>
            ))
          )}
        </div>
      );
    }

    if (activeTab === 'Education') {
      return (
        <div className="education-cards">
          {education.length === 0 ? (
            <p>No education details available.</p>
          ) : (
            education.map(edu => (
              <div key={edu.id} className="edu-card">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <span>{edu.startYear} - {edu.endYear}</span>
              </div>
            ))
          )}
        </div>
      );
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            {aboutData?.description || 'Loading about information...'}
          </p>

          <div className="about-tabs">
            {['Skills', 'Education'].map(tab => (
              <span
                key={tab}
                className={tab === activeTab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="about-tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

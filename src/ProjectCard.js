import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imgSrc, url }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={title} className="project-img" />
      </a>
    </div>
  );
}

export default ProjectCard;

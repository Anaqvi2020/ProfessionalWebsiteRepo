import React from 'react';
import './SkillCard.css';

function SkillCard({ imgSrc, name }) {
  return (
    <div className="skill-card">
      <img src={imgSrc} alt={name} className="skill-img" />
      {/*<p className="skill-name">{name}</p>*/}
    </div>
  );
}

export default SkillCard;

import React from "react";
import "./Skills.css";

const Skill = () => {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "Bootstrap"
  ];

  return (
    <div className="skill-container">

      <h1 className="skill-title">My Skills</h1>

      <div className="skill-grid">
        {skills.map((skill,index)=>(
          <div className="skill-card" key={index}>
            <p className="skill-name">{skill}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skill;
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiVite 
} from "react-icons/si";
import { FaAward, FaBriefcase, FaTimes } from "react-icons/fa";
import "./Skills.css";

const Skill = () => {
  // Store both the file URL and the title for the modal header
  const [activeCert, setActiveCert] = useState(null);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    { name: "Vite", icon: <SiVite />, color: "#646cff" },
    { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  ];

  const certifications = [
    {
      title: "MERN Stack Development Course | Qtree Technologies",
      description:
        "Completed comprehensive, hands-on training mastering MongoDB, Express.js, React, and Node.js. Engineered end-to-end full-stack web applications featuring secure database integration, robust backend architecture, and responsive user interfaces using modern JavaScript (ES6+). Designed and consumed RESTful APIs, ensuring clean data flow and optimized state management across client and server layers.",
      file: "certificates/mern-cert.pdf",
    },
  ];

  const internships = [
    {
      title: "Web Development Intern | Cubiksoft Technologies Pvt. Ltd.",
      description:
        "Spearheaded the design and development of a high-performance, MERN stack-based food ordering web application. Implemented scalable full-stack features, database schema optimization, and responsive UI/UX components using industry best practices. Demonstrated strong analytical problem-solving and debugging skills to deliver clean, maintainable code within agile team environments utilizing Git/GitHub version control.",
      file: "certificates/internship-cert.pdf",
    },
  ];

  return (
    <div className="skill-container">

      {/* SKILLS SECTION */}
      <h1 className="section-title">My Skills</h1>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="skill-icon-wrapper" style={{ "--hover-color": skill.color }}>
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS SECTION */}
      <div className="section-spacing">
        <h1 className="section-title">
          <span className="title-icon-badge">
            <FaAward />
          </span> 
          Certifications
        </h1>
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3>{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
              <button
                className="project-btn"
                onClick={() =>
                  setActiveCert({
                    url: `${import.meta.env.BASE_URL}${cert.file}`,
                    title: cert.title,
                  })
                }
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* INTERNSHIP SECTION */}
      <div className="section-spacing">
        <h1 className="section-title">
          <span className="title-icon-badge">
            <FaBriefcase />
          </span> 
          Internship 
        </h1>
        <div className="cert-list">
          {internships.map((intern, index) => (
            <div className="cert-card" key={index}>
              <h3>{intern.title}</h3>
              <p className="cert-description">{intern.description}</p>
              <button
                className="project-btn"
                onClick={() =>
                  setActiveCert({
                    url: `${import.meta.env.BASE_URL}${intern.file}`,
                    title: intern.title,
                  })
                }
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATE VIEWER MODAL */}
      {activeCert && (
        <div className="cert-viewer" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <span className="cert-modal-title">{activeCert.title}</span>
              <button className="close-btn" onClick={() => setActiveCert(null)}>
                <FaTimes /> Close
              </button>
            </div>
            <iframe
              src={activeCert.url}
              className="cert-iframe"
              title="Certificate Viewer"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Skill;
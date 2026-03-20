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
import { SiMongodb } from "react-icons/si";
import "./Skills.css";

const Skill = () => {
  const [activeCert, setActiveCert] = useState(null);

  const skills = [
    { name: "HTML",       icon: <FaHtml5 />,     color: "#e34f26" },
    { name: "CSS",        icon: <FaCss3Alt />,    color: "#1572b6" },
    { name: "JavaScript", icon: <FaJs />,         color: "#f7df1e" },
    { name: "React",      icon: <FaReact />,      color: "#61dafb" },
    { name: "Node.js",    icon: <FaNodeJs />,     color: "#3c873a" },
    { name: "MongoDB",    icon: <SiMongodb />,    color: "#47a248" },
    { name: "Git",        icon: <FaGitAlt />,     color: "#f05032" },
    { name: "Bootstrap",  icon: <FaBootstrap />,  color: "#7952b3" },
  ];

  const certifications = [
    {
      title: "MERN Stack Course",
      description:
        "Completed MERN Stack training at Qtree Technologies, gaining hands-on experience in MongoDB, Express.js, React, and Node.js. Built full-stack web applications with frontend, backend, and database integration using JavaScript.",
      file: "certificates/mern-cert.pdf",
    },
  ];

  const internships = [
    {
      title: "Web Development Intern",
      description:
        "Completed internship at Cubiksoft Technologies Pvt. Ltd., working on a MERN stack-based food ordering web application. Demonstrated strong problem-solving skills, dedication, and ability to build full-stack projects using modern web technologies.",
      file: "certificates/internship-cert.pdf",
    },
  ];

  return (
    <div className="skill-container">

      {/* SKILLS */}
      <h1 className="skill-title">My Skills</h1>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      {/* CERTIFICATIONS */}
      <h1 className="skill-title">Certifications</h1>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p className="cert-description">{cert.description}</p>
            <button
              className="project-btn"
              onClick={() =>
                setActiveCert(`${import.meta.env.BASE_URL}${cert.file}`)
              }
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* INTERNSHIP */}
      <h1 className="skill-title">Internship</h1>
      <div className="cert-list">
        {internships.map((intern, index) => (
          <div className="cert-card" key={index}>
            <h3>{intern.title}</h3>
            <p className="cert-description">{intern.description}</p>
            <button
              className="project-btn"
              onClick={() =>
                setActiveCert(`${import.meta.env.BASE_URL}${intern.file}`)
              }
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* CERT VIEWER */}
      {activeCert && (
        <div className="cert-viewer">
          <button className="close-btn" onClick={() => setActiveCert(null)}>
            ✖ Close
          </button>
          <iframe
            src={activeCert}
            className="project-video"
            title="Certificate"
          />
        </div>
      )}

    </div>
  );
};

export default Skill;
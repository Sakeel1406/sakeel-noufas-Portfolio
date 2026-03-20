import React, { useState } from "react";
import "./Skills.css";

const Skill = () => {
  const [activeCert, setActiveCert] = useState(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "Bootstrap",
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
            <p className="skill-name">{skill}</p>
          </div>
        ))}
      </div>
      <br />
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
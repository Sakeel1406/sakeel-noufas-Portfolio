import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="project-container">
      <h1 className="section-title">My Projects</h1>

      {/* PROJECT */}
      <div className="project-card">
        <h3 className="project-title">Food Ordering Web App</h3>

        <p className="project-description">
          A full-stack food ordering application with user authentication,
          shopping cart, order tracking, and Stripe payment integration.
        </p>

        <div className="tech-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">Stripe</span>
        </div>

        <button
          className="project-btn"
          onClick={() => setShowVideo(!showVideo)}
        >
          {showVideo ? "Hide Demo" : "Watch Demo"}
        </button>

        {showVideo && (
          <iframe
            className="project-video"
            width="560"
            height="315"
            src="https://drive.google.com/file/d/1OtzhzxtugDtF8zQK_lwDnOtEuiaFlN8p/preview"
            title="Project Demo"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* CERTIFICATIONS */}
      <h1 className="section-title">Certifications</h1>

      <div className="cert-card">
        <h3>MERN Stack Development Course</h3>
        <p>
          Completed a full MERN stack course covering MongoDB, Express.js,
          React, and Node.js with real-world projects.
        </p>
        <a
          href="https://drive.google.com/file/d/1x1ZeX1AoViTcjyCW5TkftrSA7tUx4CDp/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Certificate
        </a>
      </div>

      {/* INTERNSHIP */}
      <h1 className="section-title">Internship</h1>

      <div className="cert-card">
        <h3>Web Development Intern</h3>
        <p>
          Worked as a MERN stack intern where I built and maintained web
          applications, improved UI/UX, and integrated REST APIs.
        </p>
        <a
          href="https://drive.google.com/file/d/1FuCwbbZBEq49j1XnN2n15uzT1sBzaYXE/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Project;
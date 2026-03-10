import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="project-container">
      <h1 className="section-title">My Projects</h1>

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
            src="https://drive.google.com/file/d/1OtzhzxtugDtF8zQK_lwDnOtEuiaFlN8p/view?usp=drivesdk"
            title="Project Demo"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Project;
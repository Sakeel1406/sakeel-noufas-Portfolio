import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="project-container">
      <h1 className="section-title">My Projects</h1>

      {/* PROJECT */}
      <div className="project-card">
        <h3 className="project-title">Food Ordering Web App</h3>

        <p className="project-description">
          A full-stack food ordering application with authentication,
          cart, and Stripe integration.
        </p>

        <button
          className="project-btn"
          onClick={() => setShowVideo(!showVideo)}
        >
          {showVideo ? "Hide Demo" : "Watch Demo"}
        </button>

        {showVideo && (
          <iframe
            className="project-video"
            src="https://drive.google.com/file/d/1OtzhzxtugDtF8zQK_lwDnOtEuiaFlN8p/preview"
            title="Demo"
          />
        )}
      </div>

      
      
    </div>
  );
};

export default Project;
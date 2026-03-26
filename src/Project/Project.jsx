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
          A full-stack food ordering application with authentication, cart, and Stripe integration.
        </p>

        {/* BUTTON */}
        <button
          className="project-btn"
          onClick={() => setShowVideo(!showVideo)}
        >
          {showVideo ? "Hide Demo" : "Watch Demo"}
        </button>

        {/* VIDEO */}
        {showVideo && (
          <iframe
            className="project-video"
            src="https://drive.google.com/file/d/1pWOyPaLdM5hjyRbyTw7RApd1Fj-EPaVu/preview"
            title="Food Ordering Demo"
            width="100%"
            height="400"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        )}

        {/* LIVE LINK */}
        <div className="project-links">
          <a
            href="https://foodies-frontend-qe7j.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Live App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
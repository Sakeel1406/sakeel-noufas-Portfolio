import React, { useState } from "react";
import { FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import "./Project.css";

const Project = () => {
  const [showVideoFood, setShowVideoFood] = useState(false);
  const [showVideoVibeify, setShowVideoVibeify] = useState(false);

  return (
    <div className="project-container">
      <h1 className="section-title">My Projects</h1>

      {/* PROJECT 1: Food Ordering Web App */}
      <div className="project-card">
        <h3 className="project-title">Food Ordering Web App</h3>

        <p className="project-description">
          A full-stack food ordering application featuring secure authentication, dynamic cart management, and online ordering capabilities.
        </p>

        {/* DEMO BUTTON */}
        <button
          className="project-btn"
          onClick={() => setShowVideoFood(!showVideoFood)}
        >
          <FaVideo style={{ marginRight: "8px" }} />
          {showVideoFood ? "Hide Demo" : "Watch Demo"}
        </button>

        {/* VIDEO WRAPPER */}
        {showVideoFood && (
          <div className="video-wrapper">
            <iframe
              className="project-video"
              src="https://drive.google.com/file/d/1pWOyPaLdM5hjyRbyTw7RApd1Fj-EPaVu/preview"
              title="Food Ordering Demo"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* PROJECT LINKS */}
        <div className="project-links">
          <a
            href="https://foodies-frontend-qe7j.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live App
          </a>
        </div>
      </div>

      {/* PROJECT 2: Vibeify Dynamic Audio Player */}
      <div className="project-card">
        <h3 className="project-title">Vibeify - Dynamic Audio Player</h3>

        <p className="project-description">
          A dynamic web-based music streaming application built with a sleek glassmorphic user interface, playlist controls, and smooth playback functionality.
        </p>

        {/* DEMO BUTTON */}
        <button
          className="project-btn"
          onClick={() => setShowVideoVibeify(!showVideoVibeify)}
        >
          <FaVideo style={{ marginRight: "8px" }} />
          {showVideoVibeify ? "Hide Demo" : "Watch Demo"}
        </button>

        {/* VIDEO WRAPPER */}
        {showVideoVibeify && (
          <div className="video-wrapper">
            <iframe
              className="project-video"
              src="https://drive.google.com/file/d/1Zcls2BcovMTTuaTPjJHu_5pS9lPR5tZL/preview"
              title="Vibeify Demo"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* PROJECT LINKS */}
        <div className="project-links">
          <a
            href="https://vibeify-ashy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
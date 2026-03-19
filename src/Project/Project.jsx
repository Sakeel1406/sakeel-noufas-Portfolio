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

      {/* CERTIFICATIONS */}
      <h1 className="section-title">Certifications</h1>

      <div className="cert-card">
        <h3>MERN Stack Course</h3>
        <p className="cert-description">Completed MERN Stack training at Qtree Technologies, gaining hands-on experience in MongoDB, Express.js, React, and Node.js.
Built full-stack web applications with frontend, backend, and database integration using JavaScript.</p>
        <button
          className="project-btn"
          onClick={() => setActiveCert(`${import.meta.env.BASE_URL}certificates/mern-cert.pdf`)}
        >
          View Certificate
        </button>
      </div>

      {/* INTERNSHIP */}
      <h1 className="section-title">Internship</h1>

      <div className="cert-card">
        <h3>Web Development Intern</h3>
        <p className="cert-description">Completed internship at Cubiksoft Technologies Pvt. Ltd., working on a MERN stack-based food ordering web application.
Demonstrated strong problem-solving skills, dedication, and ability to build full-stack projects using modern web technologies.</p>
        <button
          className="project-btn"
          onClick={() => setActiveCert(`${import.meta.env.BASE_URL}certificates/internship-cert.pdf`)}
        >
          View Certificate
        </button>
      </div>

      {/* CERT VIEWER (LIKE DEMO VIDEO) */}
      {activeCert && (
        <div className="cert-viewer">
          <button
            className="close-btn"
            onClick={() => setActiveCert(null)}
          >
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

export default Project;
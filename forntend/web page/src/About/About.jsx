import React from 'react';
import { FaUser, FaFilePdf, FaDownload,  } from 'react-icons/fa';
import './About.css';
import { assets } from '../assets/assets';

const About = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="about-container">
      <h1 className="about-main-title">
 
        About Me
      </h1>

      <div className="about-content-wrapper">
        {/* Profile Image Section */}
        <div className="about-img-box">
          <img src={assets.my_Photo} alt="Sakeel Noufas" className="my-photo" />
          <div className="img-glow"></div>
        </div>
        
        {/* Bio Section */}
        <div className="bio-section">
          <h2>
            <FaUser  style={{ marginRight: "10px", color: "#f12a02", verticalAlign: "middle" }} />
            
            Hello! I'm Sakeel Noufas
          </h2>
          <p className="bio-highlight">
  Results-driven <strong>MERN Stack Developer</strong> dedicated to architecting and scaling high-performance, responsive web applications with clean, maintainable code.
</p>
          <p>
            With hands-on training from <strong>Qtree Technologies</strong> and practical industry internship experience at <strong>Cubiksoft Technologies</strong>, I excel in crafting robust backend services using <strong>Node.js and Express.js</strong>, designing efficient <strong>MongoDB</strong> databases, and building interactive user interfaces with <strong>React and modern JavaScript (ES6+)</strong>.
          </p>
          <p>
            I am always eager to take on complex challenges, integrate RESTful APIs, optimize performance, and collaborate on innovative digital solutions.
          </p>

          {/* Resume Section inside content */}
          <div className="resume-section">
            <div className="resume-buttons">
              <a
                href={base + "certificates/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaFilePdf style={{ marginRight: "8px" }} /> View Resume
              </a>

              <a
                href={base + "certificates/resume.pdf"}
                download
                className="btn btn-outline"
              >
                <FaDownload style={{ marginRight: "8px" }} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="thank-you">Thank you for visiting my portfolio! Let's build something amazing together.</h2>
    </div>
  );
};

export default About;
import React from 'react';
import './About.css';
import { assets } from '../assets/assets';

const About = () => {
  // Using import.meta.env.BASE_URL for Vite compatibility
  const base = import.meta.env.BASE_URL;

  return (
    <div className="about-container">
      <h1>About Me</h1>

      {/* Profile Section */}
      <img src={assets.my_Photo} alt="Sakeel Noufas" className="my-photo" />
      
      <div className="bio-section">
        <p>
          <strong>Hello! I'm Sakeel Noufas</strong>, a passionate MERN stack developer 
          with a love for creating dynamic and responsive full-stack applications. 
          I have experience in HTML, CSS, JavaScript, and React.
        </p>
        <p>In my free time, I explore new frameworks, contribute to open-source, 
          and stay updated with the latest trends. I'm always eager to take on 
          new challenges and collaborate on innovative solutions.
        </p>
          <p> Feel free to check out my projects and skills, and don't hesitate to contact me if you'd like to work together or have any questions!
        </p>
      </div>

      {/* Resume Section */}
      <div className="resume-section">
        <h2>My Resume</h2>
        <div className="resume-buttons">
          <a
             href={base + "certificates/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>

          <a
            href={base + "certificates/resume.pdf"}
            download
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <h2 className="thank-you">Thank you for visiting my portfolio!</h2>
    </div>
  );
};

export default About;
import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-card">

        <p className="contact-text">
          If you want to work together or have any questions, feel free to reach out.
        </p>

        <div className="contact-info">
          <p>
            <FaEnvelope className="contact-icon" />
            sakeelnoufash@gmail.com
          </p>
          <p>
            <FaPhone className="contact-icon" />
            +91 8270897928
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sakeelnoufas"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="link-icon" />
            LinkedIn
          </a>

          <a
            href="mailto:sakeelnoufash@gmail.com"
            className="contact-link"
          >
            <FaEnvelope className="link-icon" />
            Email Me
          </a>

          {/* Replace with your actual GitHub username
          <a
            href="https://github.com/sakeel1406"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaGithub className="link-icon" />
            GitHub
          </a> */}
        </div>

      </div>

    </div>
  );
};

export default Contact;
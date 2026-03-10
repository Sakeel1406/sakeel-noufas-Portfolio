import React from "react";
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

          <p>Email: sakeelnoufash@gmail.com</p>
          <p>Phone: +91 8270897928</p>

          <a
            href="https://www.linkedin.com/in/sakeelnoufas"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  );
};

export default Contact;
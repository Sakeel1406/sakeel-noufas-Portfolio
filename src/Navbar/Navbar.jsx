import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // GitHub Pages base path
  const base = import.meta.env.BASE_URL;

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsOpen(false); // Auto-close mobile menu on scroll
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      {/* Header stays visible */}
      <div className="nav-header">
        <h2>My Portfolio</h2>
        <h1>SAKEEL NOUFAS.N.N</h1>
      </div>

      {/* Hamburger - Only visible when NOT scrolled */}
      <div className={`menu-icon ${isScrolled ? "hide-items" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Links - Hidden when scrolled */}
      <ul className={`nav-links ${isOpen ? "active" : ""} ${isScrolled ? "hide-items" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li>
          <a href={base + "certificates/resume.pdf"} target="_blank" rel="noopener noreferrer" className="resume-link">
            Resume
          </a>
        </li>
      </ul>

      {/* Desktop Resume Button - Hidden when scrolled */}
      <a
        href={base + "certificates/resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className={`resume-btn ${isScrolled ? "hide-items" : ""}`}
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
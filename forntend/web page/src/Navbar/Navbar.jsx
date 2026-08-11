import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes ,FaFilePdf  } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Row for Mobile Alignment */}
      <div className="nav-top-row">
        <div className="nav-header">
          <h2>My Portfolio</h2>
          <h1>SAKEEL NOUFAS.N.N</h1>
        </div>

        <div 
          className={`menu-icon ${isScrolled ? "hide-items" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Links / Mobile Menu Overlay */}
      <ul className={`nav-links ${isOpen ? "active" : ""} ${isScrolled ? "hide-items" : ""}`}>
        {/* Close Button at Top Right */}
        <div className="mobile-close-wrapper">
          <FaTimes className="mobile-close-btn" onClick={() => setIsOpen(false)} />
        </div>

        <li><Link to="/" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li>
          <a href={base + "certificates/resume.pdf"} target="_blank" rel="noopener noreferrer" className="mobile-resume-link">
            <FaFilePdf /> Resume
          </a>
        </li>
      </ul>

      {/* Desktop Resume Button */}
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
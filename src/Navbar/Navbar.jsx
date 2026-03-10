import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav">
        <h2>My Portfolio</h2>
        <h1>SAKEEL NOUFAS.N.N</h1>
        <ul className="nav-links">
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
import React from 'react'
import './App.css'
import './index.css'
import { Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import About from './About/About.jsx'
import Project from './Project/Project.jsx'
import Skills from './Skills/Skills.jsx'
import Contact from './Contact/Contact.jsx'
import { assets } from './assets/assets.js'


function App() {
  const appStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${assets.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%'
  };
  return (
    <div style={appStyle}>
      <Navbar />     
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
     
    </div>
  )
}

export default App
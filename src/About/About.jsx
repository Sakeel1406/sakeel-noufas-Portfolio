import React from 'react'
import './About.css'
import { assets } from '../assets/assets';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <img src={assets.my_Photo} alt="My Photo" className="my-photo" />
      <p>
        <strong>Hello! I'm Sakeel Noufas</strong>, a passionate web developer with a love for creating dynamic and responsive websites. I have experience in HTML, CSS, JavaScript, and React. I enjoy learning new technologies and continuously improving my skills to deliver high-quality web applications.
      </p>
      <p>
        In my free time, I like to explore new frameworks and libraries, contribute to open-source projects, and stay updated with the latest trends in web development. I'm always eager to take on new challenges and collaborate with other developers to create innovative solutions.
      </p>
      <p>
        Feel free to check out my projects and skills, and don't hesitate to contact me if you'd like to work together or have any questions!
      </p>
      <h2>Thank you for visiting my portfolio !</h2>

    </div>
  )
}

export default About
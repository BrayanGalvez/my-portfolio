import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'

function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Brayan Galvez</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.instagram.com/brayangalvez.dev/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/BrayanSGalvez" target="_blank"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/brayan-galvez/" target="_blank"><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brayan Galvez. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
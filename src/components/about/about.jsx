import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'> 
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Year Working</small>
            </article>

            <article className='about__card'> 
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>

            <article className='about__card'> 
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>
          <p>
          Brayan Galvez: Data Scientist and Business Analyst, project leader and CEO of Nostalhit Music Group, LLC. He also serves as Business Analyst at Bring IT. Skilled professional in programming and web development, dedicated to innovation and contributing to projects in an integral way. His diverse experience and strategic vision make him a valuable addition to any team looking for leadership and excellence in technology and business.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>      
    </section>
  )
}

export default About
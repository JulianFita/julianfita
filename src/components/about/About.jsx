import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
          Hi, my name is Julian and I am a Data Analyst. I love to analyze data and through these to be able to provide help in decision making.<br /><br />

The Internet offers unlimited possibilities for those who take them. I have been fortunate to meet wonderful people who have guided me and helped me improve professionally day by day.<br /><br />

I consider myself a very meticulous, orderly, and detailed person. I hate doing things halfway, it's not for me.<br /><br />

I enjoy working in a team and being able to communicate well with my team thanks to it.<br /><br />

I am excited and passionate about video games. I played the various versions of “counter-strike” for many years and I even had the opportunity to compete in this discipline. Thanks to this, I met amazing people who have taught me skills that have helped me to be who I am today. Last but not least, thanks to this experience I was able to discover my passion for data, and that eventually led me to become a Data Analyst.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
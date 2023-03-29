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
          As an accomplished Data Analyst, my expertise lies in leveraging data to uncover valuable insights that drive informed decision-making. I possess a strong analytical mindset and am passionate about solving complex problems through the use of data.<br /><br />

My unwavering commitment to precision and accuracy is evident in everything I do. I am meticulous in my attention to detail, ensuring that every analysis is conducted with the utmost rigor and care. I am also a highly organized individual, capable of managing complex data sets and delivering results within tight deadlines.<br /><br />


Collaboration is a cornerstone of my work style, and I thrive in team environments where diverse perspectives are valued. I possess excellent communication skills, both written and verbal, and am adept at conveying complex data findings clearly and concisely.<br /><br />

In addition to my professional pursuits, I am a dedicated video game enthusiast. Through my experience playing and competing in "counter-strike," I have honed my analytical and strategic thinking skills, which have proved invaluable in my career as a Data Analyst.<br /><br />

I am committed to staying at the forefront of the data analysis field and continuously expanding my knowledge and skills. I am excited about the opportunity to bring my expertise and passion to a dynamic team and contribute to the success of the organization.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

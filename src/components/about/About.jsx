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
          As an accomplished Data Scientist, I specialize in harnessing the power of data to unearth valuable insights that underpin well-informed decision-making. My professional identity is rooted in a robust analytical mindset, complemented by an unwavering dedication to tackling intricate problems through data-driven solutions.<br /><br />

The hallmark of my work is precision and accuracy, evident in my meticulous attention to detail, ensuring that each analysis I undertake adheres to the highest standards of rigor and care. My professional acumen extends to adeptly managing intricate data sets and delivering results within demanding time constraints.<br /><br />


My work ethos is inherently collaborative, thriving within team environments that value diverse perspectives. My communication skills, both written and verbal, are exemplary, enabling me to convey complex data findings with clarity and conciseness.<br /><br />

Beyond my professional commitments, I am an ardent enthusiast of video gaming. My extensive experience in playing and competing in "Counter-Strike" has honed my analytical and strategic thinking abilities, skills that have found invaluable application in my role as a Data Scientist.<br /><br />

I maintain a steadfast commitment to staying at the forefront of the ever-evolving data analysis field, continuously expanding my knowledge and skillset. I am eagerly poised to contribute my expertise and passion to a dynamic team, thereby enhancing the organization's prospects for success.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

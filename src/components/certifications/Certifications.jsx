import React from 'react'
import './certifications.css'
import AVTR1 from '../../assets/courseraGoogleAvatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import CTFC1 from '../../assets/GoogleDataAnalytics_certificate.pdf'
import CTFC2 from '../../DataScientistAssociateCertification_DSA0017354644174.pdf'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR2,
    name: 'Associate Data Scientist',
    coment: 'Results-driven professional with a certified "Associate Data Scientist" qualification from Datacamp, equipped with strong analytical skills, proficiency in Python, and a proven track record in data analysis, machine learning, and data visualization. I bring hands-on experience in working with real-world datasets and a commitment to staying current with industry trends. Prepared to leverage data-driven insights to contribute effectively to dynamic challenges and drive informed decision-making in the field of data science.',
    certificate: CTFC2
  },
  {
    avatar: AVTR1,
    name: 'Google Data Analytics',
    coment: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
    certificate: CTFC1
  }
]

const Certifications = () => {
  return (
    <section id='certifications'>
      <h5>My education</h5>
      <h2>Certifications</h2>

      <Swiper className="container certifications__container" 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, coment, certificate}, index) => {
            return (
              <SwiperSlide key ={index} className='certification'>
              <div className="business__avatar">
                <img src={avatar} />
              </div>
              <h5 className='business__name'>{name}</h5>
              <small className='title__name'>{coment}</small>
              <div className="certification__item-cta">
                <a href={certificate} className='btn' target='_blank'>View Certificate</a>    
              </div>      
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Certifications

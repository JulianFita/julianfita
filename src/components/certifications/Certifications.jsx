import React from 'react'
import './certifications.css'
import AVTR1 from '../../assets/courseraGoogleAvatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import CTFC1 from '../../assets/GoogleDataAnalytics_certificate.pdf'
import CTFC2 from '../../assets/DataScientistWithPython_certificate.pdf'
import CTFC3 from '../../assets/DataAnalystInSQL_certificate.pdf'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Google Data Analytics',
    coment: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
    certificate: CTFC1
  },
  {
    avatar: AVTR2,
    name: 'Data Scientist with Python',
    coment: 'Learn Python for data science and gain the career-building skills you need to succeed as a data scientist, from data manipulation to machine learning! In this track, you’ll learn how this versatile language allows you to import, clean, manipulate, and visualize data—all integral skills for any aspiring data professional or researcher. Starting with the Python essentials for data science, you’ll work through interactive exercises that test your abilities. You’ll get hands-on with some of the most popular Python libraries for data science, including pandas, NumPy, Seaborn, Matplotlib, and many more. As you progress, you’ll work with real-world datasets to learn the statistical and machine learning techniques you need to perform hypothesis testing and build predictive models. You’ll also get an introduction to supervised learning with scikit-learn and apply your skills to various projects. Start this track, grow your data science skills, and begin your journey to becoming a confident data scientist with Python.',
    certificate: CTFC2
  },
  {
    avatar: AVTR2,
    name: 'Data Analyst in SQL',
    coment: "Database design is critical for a high-performance application. Just like you wouldn't build a house without a blueprint, you need to plan how you’ll store your data beforehand. In this interactive SQL track, you'll learn the fundamentals of database design and how to: 'Write basic SQL queries', 'Group and aggregate data to produce summary statistics', 'Join tables and apply filters and sub-queries' and, 'Write functions to explore and manipulate data'. Working with real-world datasets, gain the SQL skills you need to query a database, analyze results, and effectively communicate your insights to stakeholders. There’s no prior SQL knowledge required—start your journey to becoming a confident data analyst.",
    certificate: CTFC3
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
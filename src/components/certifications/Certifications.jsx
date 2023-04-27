import React from 'react'
import './certifications.css'
import AVTR1 from '../../assets/courseraGoogleAvatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import CTFC1 from '../../assets/GoogleDataAnalytics_certificate.pdf'
import CTFC2 from '../../assets/DataScientistWithPython_certificate.pdf'
import CTFC3 from '../../assets/DataAnalystInSQL_certificate.pdf'
import CTFC4 from '../../assets/DataAnalystInPowerBI_certificate.pdf'

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
    coment: 'Completing the Data Scientist with Python certification program from DataCamp has enabled me to develop a comprehensive set of skills and knowledge required for a successful career in data science. With proficiency in Python libraries such as NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, TensorFlow, and Keras, I can effectively perform essential data science tasks such as data cleaning, data wrangling, data visualization, hypothesis testing, regression analysis, and classification. I have hands-on experience with these libraries, allowing me to apply them in real-world scenarios. Moreover, I possess an in-depth understanding of data science best practices such as data ethics, reproducibility, and communication. This knowledge enables me to collaborate with data science teams and effectively communicate insights to non-technical stakeholders. I can also work with databases, and web APIs, which are critical to the success of data science projects. The programs practical approach, including exercises, quizzes, and projects, has enabled me to develop a data-driven mindset and effectively solve complex data science problems. I am confident in applying the learned concepts and techniques to deliver effective data-driven solutions. Overall, the Data Scientist with Python certification program has provided me with a well-rounded set of skills and knowledge to excel in data science. I am confident in my ability to contribute meaningfully to any organization that values data-driven insights.',
    certificate: CTFC2
  },
  {
    avatar: AVTR2,
    name: 'Data Analyst in SQL',
    coment: "Completing the 'Data Analyst in SQL' certification program from DataCamp has equipped me with a comprehensive set of skills and knowledge required to succeed as a data analyst. With proficiency in SQL syntax, including data querying, data filtering, and data manipulation using SQL functions, I can analyze and manipulate data effectively. I have hands-on experience in creating and managing relational databases, creating tables, indexing data, and optimizing database performance, which are critical skills for a data analyst. The program's emphasis on real-world case studies and practical exercises has enabled me to develop a data-driven mindset and effectively solve complex data problems. I am confident in applying the learned concepts and techniques to deliver effective data-driven solutions. Furthermore, I possess an in-depth understanding of data visualization and reporting using SQL, which allows me to communicate insights to non-technical stakeholders effectively. I can create charts, graphs, and other data visualizations that help make complex data more accessible and understandable. This knowledge will help me to communicate my findings effectively, leading to better decision-making. The program also emphasized best practices for data management and data governance. I have an understanding of data ethics, data security, and data privacy, which are critical to ensuring that data is managed and used responsibly. This knowledge allows me to manage data effectively, protecting both the organization and its clients. Overall, the 'Data Analyst in SQL' certification program has provided me with a well-rounded set of skills and knowledge to succeed as a data analyst. I am confident in my ability to analyze and manipulate data using SQL, communicate insights effectively to both technical and non-technical stakeholders, and manage data responsibly.",
    certificate: CTFC3
  },
  {
    avatar: AVTR2,
    name: 'Data Analyst in Power BI',
    coment: "The 'Data Analyst in Power BI' certification program from DataCamp has provided me with a comprehensive set of skills and knowledge required to succeed as a data analyst. Through the program, I have gained proficiency in Power BI, including Power Query, Power Pivot, and Power BI Desktop, which are essential tools for data analysts working with Microsoft technologies. I have also developed skills in data modeling, database design, and database management, including creating and managing data models, creating relationships between tables, and using DAX formulas to create calculated columns and measures. The program's emphasis on real-world case studies and practical exercises has enabled me to develop a data-driven mindset and effectively solve complex data problems. I am confident in applying the learned concepts and techniques to deliver effective data-driven solutions. Moreover, I have an in-depth understanding of data visualization and reporting using Power BI, allowing me to communicate insights to non-technical stakeholders effectively. I can create charts, graphs, and other data visualizations that help make complex data more accessible and understandable. In addition to technical skills, the program has also taught me best practices for data management and governance, including data ethics, security, and privacy. I am now equipped to manage data responsibly, protecting both the organization and its clients. Overall, the 'Data Analyst in Power BI' certification program has provided me with a well-rounded set of skills and knowledge to succeed as a data analyst. I am confident in my ability to create data models, transform data, and create data visualizations using Power BI, communicate insights effectively to both technical and non-technical stakeholders, and manage data responsibly.",
    certificate: CTFC4
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

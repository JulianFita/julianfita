import React from 'react'
import  './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Investigating Netflix Movies',
    github: 'https://github.com/JulianFita/Investigating-Netflix-Movies-and-Guest-Stars-in-Th/tree/main',
    demo: 'https://www.kaggle.com/code/fit4kz/investigating-netflix-movies-and-guest-stars'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Russia VS Ukraine',
    github: 'https://github.com/JulianFita/UkraineWar',
    demo: 'https://www.kaggle.com/code/fit4kz/russia-vs-ukraine-analysis-in-r-updated'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Methane Emissions Dashboard',
    github: 'https://github.com/JulianFita/methaneEmissionsDashboard',
    demo: 'https://www.kaggle.com/code/fit4kz/methane-emissions-r-analysis-dashboard'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Covid immunizations',
    github: 'https://github.com/JulianFita/covidimmunizations',
    demo: 'https://www.kaggle.com/code/fit4kz/covid-immunizations-analysis-in-r'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Predicting Credit Card Approvals',
    github: 'https://github.com/JulianFita/Predicting-Credit-Card-Approvals',
    demo: 'https://www.kaggle.com/code/fit4kz/predicting-credit-card-approvals/notebook'
  },
  {
    id: 6,
    image: IMG6,
    title: 'The Android App Market on Google Play',
    github: 'https://github.com/JulianFita/Android-App-Market-on-Google-Play',
    demo: 'https://www.kaggle.com/code/fit4kz/the-android-app-market-on-google-play'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
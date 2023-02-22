import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'  />
              <p>Financials</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Customers</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Supply Chain</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Assets</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Manufacturing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>HR</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Brands and Products</p>
            </li>
          </ul>
        </article>

        {/* END OF DATA ANALYSIS */}

        <article className="service">
          <div className="service__head">
            <h3>Data Science</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'  />
              <p>Operational Intelligence</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Supply Chain Management</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Product Quality</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Predictive Maintenance</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Dymanic Route Optimization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Customer Experience Personalization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Customer Churn</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Sales Process Optimization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Financial Risk Management</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Patient Treatment Optimization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Image analysis</p>
            </li>
          </ul>
        </article>

        {/* END OF DATA SCIENCE */}

        <article className="service">
          <div className="service__head">
            <h3>Data Entry</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'  />
              <p>Online Data Entry</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Real Estate Data Entry</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Image Data Entry</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Image Annotations</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Data Extraction</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>Internet Research</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'  />
              <p>PDF Conversion</p>
            </li>
          </ul>
        </article>

        {/* END OF DATA ENTRY */}

      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Julian Fita</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about:">About</a></li>
        <li><a href="#experience:">Experience</a></li>
        <li><a href="#services:">Services</a></li>
        <li><a href="#portfolio:">Portfolio</a></li>
        <li><a href="#certifications:">Certifications</a></li>
        <li><a href="#contact:">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/fit4kz/"><FaFacebookF /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Julian Fita. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
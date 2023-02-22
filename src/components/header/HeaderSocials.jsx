import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/juliangabrielfita/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/JulianFita' target='_blank'><FaGithub/></a>
        <a href='https://www.kaggle.com/fit4kz' target='_blank'><FaKaggle/></a>
    </div>
  )
}

export default HeaderSocials
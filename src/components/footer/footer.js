import React from 'react'
import './footer.css';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
     <a href="#" className='footer_logo'>Dhananjay Balang</a>

     <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

<div className="footer_socials">
 <a href="https://www.linkedin.com/in/dhananjay-balang/"><AiOutlineLinkedin /></a>
 <a href="https://github.com/Dhanan2509"><BsGithub/></a>
</div>

<div className="footer_copyright">
  <small>&copy; Dhananjay Balang, All rights reserved.</small>
</div>

    
    </footer>
  )
}

export default footer

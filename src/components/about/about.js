import React from 'react'
import './about.css';
import ME from '../../assets/me3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbFolders} from 'react-icons/tb'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about_container">
    <div className="about_me">
       <div className="about_me-image">
        <img src={ME} alt="About Image" />
       </div>
    </div>




    <div className="about_content">
   <div className="about_cards">
     <article className='about_card'>
   <FaAward className='about_icon'/>
   <h5>Experience</h5>
   <small>3+ Months Internship</small>
   </article >

   <article className='about_card'>
   <FiUsers className='about_icon'/>
   <h5>Internships</h5>
   <small>2 Internships</small>
   </article >

   <article className='about_card'>
   <TbFolders className='about_icon'/>
   <h5>Projects</h5>
   <small>15+ Projects</small>
   </article >
   </div>
 <p>
 Solution-driven aspiring web developer currently in senior year of college. Proven experience developing projects using Reactjs, vanilla Javascript, Html, and CSS. Designed and developed web applications across APIs ( Fetch, Post, Get ). A year of experience including internships at different start-ups with completed programming projects that compiled with existing coding standards and design styles.
 </p>

  <a href="#contact" className='btn btn-primary
  '>Let's Talk </a>
    </div>
      </div>

    </section>
  )
}

export default about

import React from 'react'
import './contact.css';
import {MdOutlineMailOutline} from 'react-icons/md'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
         <article className="contact_option">
          <MdOutlineMailOutline className='contact_option-icon'/>
           <h4>Email</h4>
           <h5>dhananjaybalang@gmail.com</h5>
           <a href="mailto:dhananjaybalang@gmail.com">Send </a>
         </article>

         

        </div>

{/* =============== End of contact options============== */}

<form action="">
<input type="text" name='name' placeholder='Your Full Name' required />
<input type="text" name='email' placeholder='Your Email' required />
<textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'  > <a href="mailto:dhananjaybalang@gmail.com">Send Message</a> </button>
</form>
      </div>
      
    </section>
  )
}

export default contact

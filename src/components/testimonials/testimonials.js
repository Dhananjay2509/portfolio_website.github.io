import React from 'react'
import './testimonials.css'
import avtr1 from '../../assets/me4.png'
import avtr2 from '../../assets/me5.jpeg'





const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
       <article className='testimonial'>
        <div className="client_avatar">
          <img src={avtr1} alt="Avatar" />
          </div>
          <h5 className='client_name'>Ragahava Sai Bodupalli <br /> Managing Director, LevanV Pvt. Ltd.</h5>
          <small className='client_review'>
          With Dhananjay’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Dhananjay!
          </small>
        
       </article>

       <article className='testimonial'>
        <div className="client_avatar">
          <img src={avtr2} alt="Avatar" />
          </div>
          <h5 className='client_name'>Ajith Kumar <br /> Director, LevanV Pvt. Ltd.</h5>
          <small className='client_review'>
          We re-did our website twice in a 12 month period. Dhananjay is professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Dhananjay the first time I would not have had to do it twice.
          </small>
       
       </article>

       {/* <article className='testimonial'>
        <div className="client_avatar">
          <img src={avtr1} alt="Avatar" />
          </div>
          <h5 className='client_name'>Pratham Suryawanshi</h5>
          <small className='client_review'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod quos sequi molestias odio reiciendis ex minus dolor ea repellendus quae, quibusdam eum error labore ullam modi fugiat! Commodi, a!
          </small>
        
       </article> */}


      </div>
    </section>
  )
}

export default testimonials

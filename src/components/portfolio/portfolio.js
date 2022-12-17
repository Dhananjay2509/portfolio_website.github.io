import React from 'react'
import './portfolio.css'
import img1 from '../../assets/t.png'
import img2 from '../../assets/q.png'
import img3 from '../../assets/b.png'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <article className='portfolio_item'>
      <div className="portfolio_item-image">
          <img src={ img1} alt="img1" />

      </div>
      <h3>TextUtils App - React</h3>
      <div className="portfolio_item-cta">
      <a href="https://github.com/Dhananjay2509/textutilsapp.github.io" className='btn'>Github</a>
      <a href="https://dhananjay2509.github.io/textutilsapp.github.io/" className='btn btn-primary' target='_blank' >Live Demo</a>
      </div>
      </article>

      <article className='portfolio_item'>
      <div className="portfolio_item-image">
          <img src={ img2} alt="img1" />

      </div>
      <h3>QUIZ APP</h3>
      <div className="portfolio_item-cta">
      <a href="https://github.com/Dhananjay2509/quizzapp.github.io" className='btn' target="_blank">Github</a>
      <a href="https://dhananjay2509.github.io/quizzapp.github.io/" className='btn btn-primary' target='_blank' >Live Demo</a>
      </div>
      </article>

      <article className='portfolio_item'>
      <div className="portfolio_item-image">
          <img src={ img3} alt="img1" />

      </div>
      <h3>BURGER WEBSITE - React</h3>
      <div className="portfolio_item-cta">
      <a href="https://github.com/Dhananjay2509/Burgerwebsite.github.io" className='btn' target="_blank">Github</a>
      <a href="https://dhananjay2509.github.io/Burgerwebsite.github.io/" className='btn btn-primary' target='_blank' >Live Demo</a>
      </div>
      </article>


      </div>
    </section>
  )
}

export default portfolio

import React from 'react'
import './experience.css';
import {BsFillPatchCheckFill} from'react-icons/bs'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      <div className="container experience_container">
           <div className="experience_frontend">
<h3>Frontend Development </h3>
<div className="experience_content">

<article className='experience_details' >
<BsFillPatchCheckFill className='experience_details-icons'/>
<div><h4>React</h4></div>
</article>

<article className='experience_details' >
<BsFillPatchCheckFill className='experience_details-icons'/>
<div><h4>HTML</h4></div>
</article>

<article className='experience_details' >
<BsFillPatchCheckFill className='experience_details-icons'/>
<div><h4>CSS</h4></div>
</article>

<article className='experience_details' >
<BsFillPatchCheckFill className='experience_details-icons'/>
<div><h4>Javascript</h4></div>
</article>

</div>
</div>



{/* ========OTHER SKILLS====== */}
  <div className="experience_backend">
  <h3>Other Related Skills </h3>
<div className="experience_content">

<article className='experience_details' >
<BsFillPatchCheckFill  className='experience_details-icons'/>
<div><h4>Bootstrap</h4></div>
</article>

<article className='experience_details' >
<BsFillPatchCheckFill  className='experience_details-icons'/>
<div><h4>Shopify</h4></div>
</article>

<article className='experience_details' >
<BsFillPatchCheckFill  className='experience_details-icons'/>
<div><h4>DSA</h4></div>
</article>

<article className='experience_details' >
<BsFillPatchCheckFill className='experience_details-icons'/>
<div><h4>Payment Int.</h4></div>
</article>


</div>
 </div>
      </div>
    </section>
  )
}

export default experience

import React from 'react'
import Testimonial from './Testimonial'
import img1 from '../../images/R-1.avif'
import img2 from '../../images/r-2.avif'
import img3 from '../../images/r-3.jpeg'

const Index = () => {
  return (
    <section className='main-testimonial' id='reviews'>
      <div className="content">
           <h2>What Our Customers</h2>
           <h2>are Saying</h2>
           <p>But I must to you all this mistaken idea of denouncing pleasure and praising pain and born !</p>
      </div>
      <div className="testimonial-cards">
          <Testimonial img={img1} name="Leo Thomas" fore="CEO Universel" />
          <Testimonial img={img2} name="John Smilga" fore="Developer" />
          <Testimonial img={img3} name="Britian Kristopher" fore="Designer" />
      </div> 
    </section>
  )
}

export default Index

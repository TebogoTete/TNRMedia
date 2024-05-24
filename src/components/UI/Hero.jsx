
import React from 'react'
import '../../styles/hero.css'

import heroDarkImg from '../../images/hero-img.png'

const Hero = () => {
  return <section className='hero_section'>
    <div className="container">
        <div className="hero_wrapper">
            <div className="hero_content">
                <div>
                <h2>We're Creating Perfect</h2>
                <h2>Digital Products To</h2>
                <h2 className='highlights'>Promote Your Brand</h2>
                </div>
                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae animi asperiores aliquid debitis neque eaque, ratione praesentium ducimus minima eius nulla atque possimus nobis laborum similique eum ab quam hic?
                </p>
                <div className="hero_btns">
                    <button className='primary_btn'>Get Started Now</button>
                    <button className="secondary_btn">Discover More</button>
                </div>
            </div>

            <div className="hero_img">
                <img src={heroDarkImg} alt="hero-img" />
            </div>
        </div>
    </div>
  </section>
}

export default Hero
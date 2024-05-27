
import React from 'react'
import '../../styles/Testimonial.css';

import Slider from "react-slick";

import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'

const Testimonial = () => {

    const settings = {
        dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    }
  return <section>
    <div className="container">
        <div className="slider_content-top">
           <h6 className="subtitle">Testimonials</h6>
           <h2>Trusted by more than <span className="highlight">2,000 customers</span></h2>
        </div>

        <div className="slider_wrapper">
        <Slider {...settings}>
        <div className='slider_item'>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque consectetur facere amet rem earum aliquam voluptatem tempora quis laborum delectus repudiandae deserunt, voluptates odio dolorem dicta incidunt molestiae. Tempora?
    </p>

    <div className="customer_details">
        <div className="customer_img">
            <img src={ava01} alt="" />
        </div>

        <div>
            <h5 className="customer_name">Jake Dillon</h5>
            <p className="description">CEO, Workcreation</p>
        </div>
      </div>
     </div> 

     <div className='slider_item'>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque consectetur facere amet rem earum aliquam voluptatem tempora quis laborum delectus repudiandae deserunt, voluptates odio dolorem dicta incidunt molestiae. Tempora?
    </p>

    <div className="customer_details">
        <div className="customer_img">
            <img src={ava02} alt="" />
        </div>

        <div>
            <h5 className="customer_name">Sandra Forest</h5>
            <p className="description">CEO, Imagine Corp</p>
        </div>
      </div>
     </div> 

         <div className='slider_item'>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque consectetur facere amet rem earum aliquam voluptatem tempora quis laborum delectus repudiandae deserunt, voluptates odio dolorem dicta incidunt molestiae. Tempora?
    </p>

    <div className="customer_details">
        <div className="customer_img">
            <img src={ava03} alt="" />
        </div>

        <div>
            <h5 className="customer_name">Paul Blart</h5>
            <p className="description">CEO, CoffeeINC</p>
        </div>
      </div>
     </div>
    </Slider>
        </div>
    </div>
  </section>
}

export default Testimonial;
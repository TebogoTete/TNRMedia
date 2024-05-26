
import React from 'react'
import '../../styles/about.css';

import aboutImg from '../../images/about-us.jpg';

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First Working process',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro cupiditate similique architecto, aperiam non alias, harum ex quos"
    },

    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro cupiditate similique architecto, aperiam non alias, harum ex quos"
    },

    {
        icon: 'ri-customer-service-line',
        title: '24/7 Hours support',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro cupiditate similique architecto, aperiam non alias, harum ex quos"
    },
]

const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about_wrapper">
            <div className="about_content">
            <h6 className="subtitle">Why choose us</h6> 
           <h2>Specialist in advising clients on</h2>
           <h2 className="highlight">Everything Digital</h2>
           <p className="description about_content-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, amet. Temporibus porro similique quisquam vitae corrupti aliquam atque consequatur velit neque architecto possimus, saepe tempore. Ipsa illo possimus incidunt impedit.
           </p>

           <div className='choose_us-item-wrapper'>
            {
                chooseData.map((item,index)=>(
                    <div className="choose_us-item" key={index}>
            <span className="choose_us-icon">
            <i class={item.icon}></i>
            </span>
            <div>
            <h4 className="choose_us-title">{item.title}</h4>
            <p className="description">{item.desc}
            </p>
            </div>
           </div>
                ))
            }
           </div>
            </div>

            <div className="about_img">
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
  </section>
}

export default About;
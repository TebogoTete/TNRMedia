import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon:'ri-apps-line',
        title: 'App Development',
        desc:' Lorem ipsum dolor, sit amet consectetur elit. soluta impedit facere, obcaecati possimus corrupti expedita. Eaque.'
    },

    {
        icon:'ri-code-s-slash-line',
        title: 'Web Design',
        desc:' Lorem ipsum dolor, sit amet consectetur elit. soluta impedit facere, obcaecati possimus corrupti expedita. Eaque.'
    },

    {
        icon:'ri-landscape-line',
        title: 'Graphics Design',
        desc:' Lorem ipsum dolor, sit amet consectetur elit. soluta impedit facere, obcaecati possimus corrupti expedita. Eaque.'
    },

    {
        icon:'ri-rocket-line',
        title: 'Digital Marketing',
        desc:' Lorem ipsum dolor, sit amet consectetur elit. soluta impedit facere, obcaecati possimus corrupti expedita. Eaque.'
    },
]


const Services = () => {
  return <section id="service">
    <div className="container">
        <div className="service_top-container">
           <h6 className="subtitle">Our Services</h6> 
           <h2>Save time managing your business with</h2>
           <h2 className="highlight">our best services</h2>
        </div>

        <div className="services_item-wrapper">
            {
                serviceData.map((item,index)=>(
                    <div className="services_item" key={index}>
                <span className="service_icon">
                    <i class={item.icon}></i>
                    </span>
                <h3 className="service_title">{item.title}</h3>
                <p className="description">{item.desc}</p>
            </div>
                ))
            }
        </div>
    </div>
  </section>
}

export default Services
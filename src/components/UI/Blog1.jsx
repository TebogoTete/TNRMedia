
import React from 'react'
import '../../styles/blog.css';

import videoImg from '../../images/video.png';
import articleImg from '../../images/article.png';
import caseStudy from '../../images/case-study.png';


const blogData =[
    {
       imgURL: videoImg,
       title: 'Video',
       desc: 'To know about our work. Watch some video f....',
       linkURL: '#',
    },

    {
        imgURL: articleImg,
        title: 'Articles',
        desc: 'Do you want to improve the way your brand interacts with customers? Lets talk.',
        linkURL: '#',
     },

     {
        imgURL: caseStudy,
        title: 'Case Study',
        desc: 'Boost your conversion rate with us....',
        linkURL: '#',
     }, 
]

const Blog1 = () => {
    return <section>
      <div className="container">
          <div className="blog_top-content">
              <h6 className="subtitle">Our Blog</h6>
              <h2>Let's have a look at our <span className="highlight">
                  recent blog</span></h2>
          </div>

          <div className="blog_wrapper">
           {
            blogData.map((item,index)=>(
                <div className="blog_item" key={index}>
                <h3>{item.title}</h3> 
                <div className="blog_img">
                 <img src={item.imgURL} alt="" />
                </div>
                <p className="description blog_desc">{item.desc}</p>
                <div>
                 <a href={item.linkUrl} className="learn_more">
                 <i class="ri-arrow-right-line"></i>
                 </a>
                </div>
             </div>
            ))
           }
          </div>
      </div>
    </section>
  }

export default Blog1




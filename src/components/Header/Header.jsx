import React from 'react'

import "./header.css";

const nav_links =[
    {
        path:'#home',
        display:'Home'
    },

    {
        path:'#about',
        display:'About'
    },

    {
        path:'#service',
        display:'Service'
    },

    {
        path:'#projects',
        display:'Projects'
    },

    {
        path:'#blog',
        display:'Blog'
    },
];

const Header = ({theme, toggleTheme}) => (
    <header className='header'>
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <h2>TNRCreativeMedia</h2>
                    
                </div>

                {/* ========== navigation ============== */}
                <div className="navigation">
                    <ul className="menu">
                        {nav_links.map((item, index)=>(
                            <li className="menu_item"><a href={item.path} className="menu_link">
                                {item.display}
                                </a>
                                </li>
                        ))}
                    </ul>
                </div>

                {/* ========== light mode ============== */}
                <div className="light_mode" >
                   <span onClick={toggleTheme}>
                    {
                        theme==='light-theme' ? ( <span><i class="ri-moon-line"></i>Dark
                        </span>
                        ) : ( 
                        <span> 
                        <i class="ri-sun-line"></i> Light
                        </span>
                    )}
                     
                   </span> 
                </div>
            </div>
        </div>
    </header>
)

export default Header;
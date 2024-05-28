import React,{useState,useEffect} from 'react';

import './App.css';

import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog1 from './components/UI/Blog1';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';


function App() {

const [theme, setTheme] = useState('')

const toggleTheme = ()=>{
  theme === '' ? setTheme('light-theme') : setTheme('')
}
  useEffect(()=>{
   document.body.className = theme  
  },[theme])


  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <Hero theme={theme} />
    <Services />
    <About />
    <Team />
    <Blog1 />
    <Testimonial />
    <Newsletter />
    <Footer />
    </>
  );
}

export default App;

import React from 'react'
import Slider from '../Slider'
import News from '../News'
import About from '../About'
import More from '../More'
import Contact from '../Contact'
import './css/style.css' 
import './css/bootstrap.min.css' 
import './css/bootstrap.min.css' 
// import '../../assets/herb-verb/images/bg.jpg' 
function Welcome() {
  
    return (
		<div>
		<Slider/>
        <News/>
        <About/>
        <More/>
        <Contact/>
        </div>
    )
}

export default Welcome

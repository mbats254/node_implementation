import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div className="header-outs" id="header">
            <header>
            <div className="container-fluid px-lg-5 fixed-top">
             <div className="hedder-up">
                      <h1><a className="navbar-brand" href="index.html">Herb</a></h1>
                   </div>
                <nav className="mnu mx-auto ">
                          <label htmlFor="drop" className="toggle">Menu</label>
                            <input type="checkbox" id="drop"/>
                            <ul className="menu">
                                <li className="mr-lg-4 mr-3 active"><a href="index.html">Home</a></li>
                                 <li className="mr-lg-4 mr-3"><a href="#about" className="scroll">About</a></li>
                                <li className="mr-lg-4 mr-3"><a href="#services" className="scroll">Services</a></li>
                                 <li className="mr-lg-4 mr-3"><a href="#more" className="scroll">More</a></li>
                                <li className="mr-lg-4 mr-3"><a href="#news" className="scroll">News</a></li>
                                <li><a href="#contact" className="scroll">Contact</a></li>
                            </ul>
                        </nav>
            </div>
        </header>
    
             
            <div className="baner-text text-center">
                    <h2 className="mx-auto">Flex Saw Blades</h2>
                    <p className="mx-auto mt-4 pt-2">Your Partner </p>
                    <a className="btn btn-primary mt-lg-5 mt-3 agile-link-bnr scroll" href="#about" role="button">Get Started</a>
                </div>
             <div className="clearfix"></div>
          </div>
        )
    }
}

export default Slider

import React, { Component } from 'react'
import logo from '../images/logo.png'
import ResponsiveMenu from 'react-responsive-navbar'

export default class Example extends Component {
  render() {
    return (
      <div className="header">

      
        <div className="container">
          <div className="logo">
            <a aria-current="page" className="" href="/">
              <img alt="Figurit Homepage" src={logo} className="logo-image" />
             
            </a>
           
          </div>
        
          <div className="logo-mobile">
            BJMPSLAI
            <a aria-current="page" className="" href="/"></a>
          </div>

          <ResponsiveMenu
            menuOpenButton={
              <>
                <button
                  id="toggle-main-menu-mobile"
                  className="hamburger hamburger--slider "
                  type="button"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </>
            }
            menuCloseButton={
              <>
                <button
                  id="toggle-main-menu-mobile"
                  class="hamburger hamburger--slider is-active"
                  type="button"
                  style={{ zIndex: 100 }}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <div className="main-menu-mobile open">
                  <ul>
                    <li>
                      <a href="/" activeClassName="active">Home</a>
                    </li>
                      <li>
                      <a href="/download-forms">Download Forms</a>
                    </li>
                    <li>
                      <a href="/product">Services</a>
                    </li>
                    <li>
                      <a href="/blog">News</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>

                    <li>
                      <a href="/contact-us">Contact US</a>
                    </li>
                    
                  
                    
                  </ul>
                </div>
              </>
            }
            changeMenuOn="800px"
            largeMenuClassName="main-menu"
            smallMenuClassName=""
            menu={
                 <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                      <li>
                      <a href="/download-forms">Download Forms</a>
                    </li>
                    <li>
                      <a href="/product">services</a>
                    </li>
                    <li>
                      <a href="/blog">News</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>

                    <li>
                      <a href="/contact-us">Contact US</a>
                    </li>
                    
                  
                    
                  </ul>
            }
          />
        </div>
      </div>
    )
  }
}

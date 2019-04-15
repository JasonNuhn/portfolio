import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

import threeEntryPoint from "./threejs/threeEntryPoint"
import Footer from '../footer'
import "./header.css"

export default class Header extends Component {
    // componentDidMount() {
    //     threeEntryPoint(this.threeRootElement);
    // }

    render() {
            return (
                <div >
              <Fade top>
              <ul>
              <h1>Jason Nuhn</h1>
            <a href="https://medium.com/@jason.a.nuhn"> <i class="fab fa-medium"></i></a>
            <a href="https://www.linkedin.com/in/jasonnuhn/"> <i class="fab fa-linkedin"></i></a>
          <a href="mailto:jason.a.nuhn@gmail.com"> <i class="far fa-envelope"></i>
          </a>
            <a href="https://github.com/JasonNuhn"> <i class="fab fa-github"></i></a>
              </ul>
              </Fade>
            </div>
        );
    }
}
{/* <div className="header-header" ref={element => this.threeRootElement = element} /> */}
{/* <Footer /> */}
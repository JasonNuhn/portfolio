import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

import threeEntryPoint from "./threejs/threeEntryPoint"
import "./header.css"

export default class Header extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render() {
            return (
                <div >
              <Fade left>
              <div className="header-header" ref={element => this.threeRootElement = element} />
              <div style={{display: 'flex', justifyContent: 'center'}}>
              </div>
              </Fade>
            </div>
        );
    }
}
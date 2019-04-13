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
            <Fade top>
                <div className="header-header" ref={element => this.threeRootElement = element} />
            </Fade>
        );
    }
}
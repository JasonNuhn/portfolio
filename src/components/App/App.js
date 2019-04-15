import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './App.css';

import Header from '../Header'
import Footer from '../footer'
import About from '../about'
import Work from '../work'
import ParticleComponent from "../particles";

class App extends Component {
  render() {
    return (
      <div>
        <ParticleComponent />
        <Header />
        <About />
        <Work />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

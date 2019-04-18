import React, { Component } from 'react'
import './App.css';

import Header from '../Header'
import Footer from '../footer'
import About from '../about'
import Work from '../work'

class App extends Component {
  render() {
    return (
      <div>
  <Header />
  <About />
  <Work />
  <Footer />
</div>
    );
  }
}

export default App;
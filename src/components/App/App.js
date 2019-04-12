import React, { Component } from 'react';
import './App.css';

import Header from '../Header'
import Footer from '../footer'
import About from '../about'
import Work from '../work'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Work />
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World!
          </a>
        </header> */}
        <Footer />
      </div>
    );
  }
}

export default App;

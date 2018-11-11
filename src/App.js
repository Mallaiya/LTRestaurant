import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;

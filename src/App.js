import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderPortal from './Header.js'
import {Card} from './Card.js'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPortal>This dsd</HeaderPortal>


        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <Wrapper><Title className="App-title">Welcome to React</Title></Wrapper> */}
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Card secondary/>
          <Card secondary/>
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;

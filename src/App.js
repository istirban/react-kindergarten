import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kindergarten from './containers/Kindergarten';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Kindergarten />
      </div>
    );
  }
}

export default App;

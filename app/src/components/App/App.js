import React, { Component } from 'react';
import logo from '../../content/logo.svg';
import '../../content/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Always Sunny</h2>
        </div>
        <p className="App-intro">
          Home of the finest <code>milksteaks</code> and <code>jellybeans</code> in the world.
        </p>
      </div>
    );
  }
}

export default App;

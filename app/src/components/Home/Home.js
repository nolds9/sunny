import React, { PropTypes } from 'react';
import logo from '../../content/logo.svg';
import '../../content/App.css';

const Home = ({ message }) => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Always Sunny</h2>
        </div>
        <p className="App-intro">
          {message}
        </p>
      </div>
    );
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Home;

import React, { Component } from 'react';

import './AppFooter.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
        <a target="_blank" href="https://github.com/backcoc">
          <img
            src="assets/github-10-xxl.png"
            width="30"
            height="30"
            alt="Github"
          />
        </a>
        <h5>
          Made with <span style={{ color: 'red' }}>♥</span> by <a
            target="_blank"
            href="https://www.linkedin.com/in/yousaf-raza/"
          >
            Malik
          </a> using React
        </h5>
      </div>
    );
  }
}

export default AppFooter;

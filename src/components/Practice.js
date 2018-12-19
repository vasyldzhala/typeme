import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import InputField from './InputField';
import phrases from './phrases';
import LoginWarn from "./LoginWarn";


class Practice extends Component {

  constructor(props) {
    super(props);
    this.phrases = phrases;
    this.state = { phrase: this.getRandomPhrase(this.phrases) };
  }

  getRandomPhrase = arr => arr[Math.floor((Math.random() * arr.length))];

  startTypingHandler = event => {
    this.setState({
      phrase: this.getRandomPhrase(this.phrases)
    });
  };

  render () {
    return (
      <main className="main-container">

        <h2>
          Practice and speed up your typing!
        </h2>
        <div className="main-content">
          <p>
            Learn
            <Link className="link" to="/learn" title="Learn">
              how to touch type
            </Link>
            to improve your typing skills
          </p>
          <p>
            Take an online typing test to find out your typing speed
            <button className="btn-start" onClick={this.startTypingHandler}>Start Typing</button>
          </p>

          <LoginWarn/>

        </div>

        <InputField phrase={this.state.phrase} />

      </main>
    )
  }
}

export default Practice;

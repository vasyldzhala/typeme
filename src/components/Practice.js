import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from './InputField';

import phrases from './phrases';

class Practice extends Component {

  constructor(props) {
    super(props);
    this.phrases = phrases;
    this.state = { phrase: this.getRandomPhrase(this.phrases) };
  }

  getRandomPhrase = arr => arr[1];

  startTypingHandler = event => {
    this.setState({
      phrase: this.phrases[Math.floor((Math.random() * this.phrases.length))]
    });
  };

  render () {
    return (
      <main className="main-container">
        <h2>
          Practice and speed up your typing!
        </h2>
        <p>
          Take an online typing test to find out your typing speed
          <button className="btn-start" onClick={this.startTypingHandler}>Start Typing</button>
        </p>
        <InputField phrase={this.state.phrase} />

      </main>
    )
  }

}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  // simpleAction: (data) => dispatch(simpleAction(data)),
  // requestAction: (data) => dispatch(requestAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);

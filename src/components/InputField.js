import React, { Component } from 'react';
import Keyboard from './Keyboard';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.regularStyle = { borderColor: 'transparent' };
    this.errorStyle = { borderColor: 'red' };
    this.inputStyle = this.regularStyle;
    this.written = '';

    this.setProperies(props.phrase);
    this.state = {
      written: this.written,
      errors: this.errors
    };

    this.onKeyUpHandler = ({key}) => {
      if (this.startFlag) {
        this.startTime =  Date.now();
        this.startFlag = false;
      }
      if (!this.isFinished) {
        if (key === this.left[0]) {
          this.written = this.written.concat(this.left[0]);
          this.left = this.left.slice(1);
          this.setState({written: this.written});
          this.inputStyle = this.regularStyle;
        } else {
          if (key !== 'Shift') {
            this.inputStyle = this.errorStyle;
            this.setState({
              written: this.written,
              errors: this.errors++
            });
          }
        }
        if (!this.left.length) {
          this.results = this.getResults();
          this.isFinished = true;
          console.log('results!' , this.results);
        }
      }
    }
  }

  setProperies = string => {
    this.inputStyle = this.regularStyle;
    this.left = string;
    this.written = '';
    this.errors = 0;
    this.startFlag = true;
    this.isFinished = false;
  };

  getAccuracy = () => {
    const written = this.written.length;
    return (written) ? (100 * (1 - this.errors / this.written.length)).toFixed(1) : '__';
  };

  getSpeed = () => {
    const symbInWord = 5.1;
    return (this.startFlag) ? '__'
      : ( 1000 * 60 * this.written.length / (Date.now() - this.startTime) / symbInWord ).toFixed(2);
  };

  getResults = () => {
    return {
      speed: this.getSpeed(),
      accuracy: this.getAccuracy()
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setProperies(nextProps.phrase);
    this.setState({
      written: this.written,
      errors: this.errors
    });
  }

  render () {
    return (
      <div>
        <div className="statistics">
          <span>Symbols: {this.written.length}</span>
          <span>Typing Speed: {this.getSpeed()}WPM</span>
          <span>Accuracy: {this.getAccuracy()}%</span>

        </div>
        <div className="input-field" style={ this.inputStyle }>
          <p>
            <span className="written">{this.written}</span>
            <input type="text"
                   autoFocus={true}
                   maxLength={1}
                   onKeyUp={event => this.onKeyUpHandler(event)}
                   onBlur={event => event.target.focus()}
            />
            <span className="left">{this.left}</span>
          </p>
        </div>
        <Keyboard nextKey={this.left[0] || ''}/>
      </div>

    )
  }

}


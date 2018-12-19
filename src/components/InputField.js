import React, { Component } from 'react';
import {connect} from 'react-redux';

import Keyboard from './Keyboard';
import saveResult from '../actions/saveResult';
import Results from "./Results";

class InputField extends Component {
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
          this.inputStyle = this.regularStyle;

          this.setState({
            written: this.written
          });

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
          this.results = {
            user_id: this.props.user.id,
            ...this.getResults()
          };
          this.isFinished = true;
          this.saveResults(this.results);
        }
      }
    }
  }

  saveResults = results => {
    const url = 'https://typeme.jala.in.ua/db/saveresult.php';
    this.props.saveResult(url, results);
  };

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
    return (written) ? (100 * (1 - this.errors / this.written.length)).toFixed(2) : '__';
  };

  getSpeed = () => {
    const symbInWord = 5.1;
    const milliSeconds = 60000;
    return (this.startFlag) ?
      '__'
      :
      ( milliSeconds * this.written.length / (Date.now() - this.startTime) / symbInWord ).toFixed(2);
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

    const isResults = (this.isFinished && !this.startFlag);

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

        { !isResults ?
          <Keyboard  nextKey={this.left[0]}/>
          :
          <Results results={this.results}/>
        }

      </div>

    )
  }

}

const mapStateToProps = state => ({
  user: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  saveResult: (url, result) => dispatch(saveResult(url, result))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);




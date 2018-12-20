import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchUser from '../actions/fetchUser';

import Spinner from './spinner';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: {
        login: true,
        password: true
      },
      isWelcome: false,
      login: '',
      password: ''
    };

    this.checkInput = str => {
      return /^[0-9a-zA-Zа-яієїА-ЯЄЇІ]+$/u.test(str);
    };

    this.onInputChangeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        isValid: {...this.state.isValid, [name]: this.checkInput(value)},
        [name]: value
      });
    };

    this.isInputsValid = () => {
      return (
        this.state.isValid.login
        && this.state.isValid.password
        && this.state.login
        && this.state.password
      );
    };

    this.onLogIn = event => {
      event.preventDefault();
      const url = 'https://typeme.jala.in.ua/db/confirmuser.php';
      const user = {
        name: this.state.login,
        password: this.state.password
      };
      this.props.fetchUser(url, user);
      this.setState({
        isWelcome: true
      });
    };

    this.onSighUp = event => {
      event.preventDefault();
      const url = 'https://typeme.jala.in.ua/db/adduser.php';
      const user = {
        name: this.state.login,
        password: this.state.password
      };
      this.props.fetchUser(url, user);
      this.setState({
        isWelcome: true
      });
    };
  }

  render() {

    const WelcomeMessage = () => {
      return (
        <div hidden={!this.state.isWelcome}>
          {
            (!this.props.user.success && !this.props.user.errorMessage) ?
              <Spinner/>
              :
              (this.props.user.success) ?
                <div className="welcome"><h3>Hello, {this.props.user.name}!</h3></div>
                :
                <div className="welcome"><h3>{this.props.user.errorMessage}</h3></div>
          }
        </div>
      )
    };


    return (
      <div className="main-container">
        <form className="login-form" name="loginForm">
          <h2>Please, Log or Sign Up now</h2>
          <div className="section">
            <p>Your login and password may contain letters and numbers without spaces</p>
            <br/>
            <div className="input-container">
              <label htmlFor="userLogin">Login:</label>
              <input
                className="text-input"
                type="text"
                name="login"
                required
                maxLength="20"
                onBlur={this.onInputChangeHandler}
                onChange={this.onInputChangeHandler}
              />
            </div>
            <p className="error">
            <span hidden={this.state.isValid.login}>
	            Invalid login!
            </span>
            </p>
            <br/>

            <div className="input-container">
              <label htmlFor="userPassword">Password:</label>
              <input
                className="text-input"
                type="password"
                name="password"
                required
                maxLength="20"
                onBlur={this.onInputChangeHandler}
                onChange={this.onInputChangeHandler}
              />
            </div>

            <p className="error">
            <span hidden={this.state.isValid.password}>
	            Invalid password!
            </span>
            </p>

            <p className="error warning"
               id="warning"
               hidden={this.props.user.success}
            >
              {this.props.user.details}
            </p>
            <br/>
            <div className="input-container">
              if you are already registered
              <button className="btn-confirm"
                      disabled={!this.isInputsValid()}
                      onClick={this.onLogIn}
              >
                Log In
              </button>
              <br/>
              otherwise create new account
              <button className="btn-confirm"
                      disabled={!this.isInputsValid()}
                      onClick={this.onSighUp}
              >
                Sign Up
              </button>

              <WelcomeMessage/>

            </div>
          </div>


        </form>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (url, user) => dispatch(fetchUser(url, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

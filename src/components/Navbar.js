import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../assets/img/type-me-logo-w.svg';
import {
  faStopwatch,
  faRunning,
  faChartLine,
  faChalkboardTeacher,
  faUserCircle
}
  from '@fortawesome/free-solid-svg-icons';

library.add(faStopwatch, faRunning, faChartLine, faChalkboardTeacher, faUserCircle);

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <NavLink to="/" title="TypeMe!">
          <img src={logo} alt="Logo"/>
        </NavLink>
        <NavLink exact activeClassName="current" to="/" title="Practice">
          <FontAwesomeIcon icon="stopwatch"
                           color="white"
                           size="2x"
          />
        </NavLink>
        <NavLink exact activeClassName="current" to="/progress" title="Progress">
          <FontAwesomeIcon icon="chart-line"
                           color="white"
                           size="2x"
          />
        </NavLink>
        <NavLink exact activeClassName="current" to="/learn" title="Learn">
          <FontAwesomeIcon icon="chalkboard-teacher"
                           color="white"
                           size="2x"
          />
        </NavLink>
        <NavLink exact activeClassName="current" to="/login" title="Log In">
          <FontAwesomeIcon icon="user-circle"
                           color="white"
                           size="2x"
          />
          <span hidden={!this.props.user.success}>
            {this.props.user.name}
          </span>
        </NavLink>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
});

export default connect(mapStateToProps)(Navbar);



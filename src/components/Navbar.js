import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStopwatch, faRunning, faChartLine, faChalkboardTeacher, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/type-me-logo-w.svg';

library.add(faStopwatch, faRunning, faChartLine, faChalkboardTeacher, faUserCircle);

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <Link to="/" title="TypeMe!">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/" title="Practice">
          <FontAwesomeIcon icon="stopwatch"
                           color="white"
                           size="2x"
          />
        </Link>
        <Link to="/progress" title="Progress">
          <FontAwesomeIcon icon="chart-line"
                           color="white"
                           size="2x"
          />
        </Link>
        <Link to="/learn" title="Learn">
          <FontAwesomeIcon icon="chalkboard-teacher"
                           color="white"
                           size="2x"
          />
        </Link>
        <Link to="/login" title="Log In">
          <FontAwesomeIcon icon="user-circle"
                           color="white"
                           size="2x"
          />
          <span hidden={!this.props.user.success}>
          {this.props.user.name}
        </span>
        </Link>
      </nav>
    )
  }

}

const mapStateToProps = state => ({
  user: state.userReducer
});

export default connect(mapStateToProps)(Navbar);



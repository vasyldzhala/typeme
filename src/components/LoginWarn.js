import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class LoginWarn extends Component {

  render() {
    return (
      <p className="warning" hidden={this.props.user.id}>
        Please,
        <Link to="/login" title="Log In">
          Log In
        </Link>
        to save your results and view statistics!
      </p>
    )
  }

}

const mapStateToProps = state => ({
  user: state.userReducer
});

export default connect(mapStateToProps)(LoginWarn);

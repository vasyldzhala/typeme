import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import Navbar from './components/Navbar';
import Practice from './components/Practice';
import Learn from './components/Learn';
import Login from './components/Login';
import Footer from './components/Footer';
import ProgressCharts from "./components/ProgressCharts";

class App extends Component {

  render() {
    return (
      <div className="wrapper">

        <Router>
          <div className="content">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Practice}/>
              <Route path="/progress" component={ProgressCharts}/>
              <Route path="/learn" component={Learn}/>
              <Route path="/login" component={Login}/>
              <Route component={Practice}/>
            </Switch>
          </div>
        </Router>
        <Footer />

      </div>
    );
  }
}

export default App;

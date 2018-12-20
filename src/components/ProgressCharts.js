import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Chart } from "react-charts";

import getStatistics from '../actions/getStatistics';
import LoginWarn from "./LoginWarn";
import Spinner from './spinner';

class ProgressCharts extends Component {

  getStatisticData = () => {
    const url = 'https://typeme.jala.in.ua/db/readresults.php';
    const userId = {user_id: this.props.user.id};
    this.props.getStatistics(url, userId);
  };

  componentDidMount() {
    if (this.props.user.id) {
      this.getStatisticData();
    }
  };

  componentWillReceiveProps(nextProps) {
    const rawData = nextProps.progressData;
    this.speed = [
      {
        label: 'Typing speed',
        data: rawData.statistics.map(item => [new Date(item.date), item.speed])
      }
    ];
    this.accuracy = [
      {
        label: 'Typing accuracy',
        data: rawData.statistics.map(item => [new Date(item.date), item.accuracy])
      }
    ];
  }

  render() {

    const ChartComponent = (props) => {
      if (props.data) { return (
        <div className="chart-container">
          <Chart
            data={props.data}
            axes={[
              { primary: true, type: "time", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
          />
        </div>
      )} else {
        return (<div><Spinner/></div>)
      }
    };

    return (
      <main className="main-container">
        <h2>
          Progress on your results
        </h2>

        <LoginWarn/>

        <div hidden={!this.props.user.id}>
          <section className="section">
            <h3>Typing speed, Words Per Minute</h3>
            <ChartComponent data={this.speed}/>
          </section>

          <section className="section">
            <h3>Accuracy, %</h3>
            <ChartComponent data={this.accuracy}/>
          </section>

        </div>

      </main>
    )
  }

}

const mapStateToProps = state => ({
  user: state.userReducer,
  progressData: state.statisticsReducer
});

const mapDispatchToProps = dispatch => ({
  getStatistics: (url, user_id) => dispatch(getStatistics(url, user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressCharts);

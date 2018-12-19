import React from 'react';
import levels from './levels';

const Results = props => {

  const speed = props.results.speed;
  const level = levels.find(level => ( (level.from <= speed) && (speed < level.to) ));

  return (
    <section className="section results">
      <img className="float-img" src={level.img} alt=""/>
      <div>
        <h3>{level.message}</h3>
        <p>Typing speed: <strong>{speed}</strong> Words Per Minute</p>
        <p>Typing accuracy: <strong>{props.results.accuracy}</strong>%</p>
        <p>Your level: <strong>{level.name}</strong></p>
      </div>
    </section>

  )

};

export default Results;

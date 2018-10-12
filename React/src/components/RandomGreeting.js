import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

class RandomGreeting extends Component {

  shouldComponentUpdate = (nextProps,nextState) =>  nextProps.isSelecting === this.props.isSelecting;

  render(){
    const greeting = [
      'Would you like to make an appointment?',
      'Book now and and secure a date?',
      'Book before it\'s too late'
    ];
    let randomGreeting = Math.floor(Math.random()*greeting.length);
    return(
      <div className="flexItem1">
        {greeting[randomGreeting]}
      </div>
    );
  };
};


RandomGreeting.propTypes = {
  isSelecting:PropTypes.bool,
};

export default RandomGreeting;

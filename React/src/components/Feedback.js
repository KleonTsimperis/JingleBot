import React from 'react';
import './components.css';
import PropTypes from 'prop-types';
import Appointments from './Appointments';


const Feedback = props =>
  <div className="selectDateMessage">
    {props.appointmentsFromDB.length === 3 ? <Appointments appointmentsFromDB={props.appointmentsFromDB} /> : props.message}
  </div>;

Feedback.propTypes = {
  appointmentsFromDB:PropTypes.array,
  message:PropTypes.string
};

export default Feedback;

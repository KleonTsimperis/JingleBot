import React from 'react';
import PropTypes from 'prop-types';


const UIforLimitReached = props =>

  <button onClick={props.clearAppointments} className="buttonClear">
    Clear Appointments
  </button>

UIforLimitReached.propTypes = {
  clearAppointments:PropTypes.func
};

export default UIforLimitReached;

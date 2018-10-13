import React from 'react';
import PropTypes from 'prop-types';

const UIforWithinLimit = props =>
  <>
    <button onClick={props.createAppointment} className="buttonCreateAppointment">
      Create Appointment
    </button>
    <button onClick={props.handleIsSelecting} className="buttonCancel">
      Go Back
    </button>
</>

UIforWithinLimit.propTypes = {
  createAppointment:PropTypes.func,
  handleIsSelecting:PropTypes.func
};

export default UIforWithinLimit;

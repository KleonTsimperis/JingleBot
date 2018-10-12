import React from 'react';
import PropTypes from 'prop-types';
import '../components.css';

const UIforHelpAndStart = props =>

  <>
    <button onClick={props.handleIsSelecting} className="buttonCreateAppointment">
      Select Date
    </button>
    <button onClick={props.helpMessage} className="buttonCancel">
      Help
    </button>
  </>;

UIforHelpAndStart.propTypes = {
  handleIsSelecting:PropTypes.func,
  helpMessage:PropTypes.func
};

export default UIforHelpAndStart;

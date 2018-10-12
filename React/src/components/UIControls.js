import React from 'react';
import './components.css';
import PropTypes from 'prop-types';
import UIforWithinLimit from './UIControls/UIforWithinLimit';
import UIforLimitReached from './UIControls/UIforLimitReached';
import UIforHelpAndStart from './UIControls/UIforHelpAndStart';

const UIControls = props =>

  <div>
    {
      props.isSelecting ?
      props.appointments.length !== 3 ?
        <UIforWithinLimit
          createAppointment={props.createAppointment}
          handleIsSelecting={props.handleIsSelecting}
        />
        :
        <UIforLimitReached
          handleIsSelecting={props.handleIsSelecting}
          clearAppointments={props.clearAppointments}
        />

      :

      <UIforHelpAndStart
        handleIsSelecting={props.handleIsSelecting}
        helpMessage={props.helpMessage}
      />
     }
  </div>;

UIControls.propTypes = {
  isSelecting:PropTypes.bool,
  appointments:PropTypes.array,
  createAppointment:PropTypes.func,
  handleIsSelecting:PropTypes.func,
  clearAppointments:PropTypes.func,
  helpMessage:PropTypes.func
};

export default UIControls;

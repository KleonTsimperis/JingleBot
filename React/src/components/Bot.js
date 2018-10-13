import React from 'react';
import UIControls from './UIControls';
import PropTypes from 'prop-types';
import RandomGreeting from './RandomGreeting';
import './components.css';
import Interactions from './Interactions';


const Bot = props =>

    <div className="Bot">
      {
        props.isSelecting ?
         <Interactions
           selected={props.startDate}
           handleChange={props.handleChange}
           message={props.message}
           appointmentsFromDB={props.appointmentsFromDB}
         />
         :
         <RandomGreeting
           isSelecting={props.isSelecting}
         />
       }
      <UIControls
        isSelecting={props.isSelecting}
        handleIsSelecting={props.handleIsSelecting}
        createAppointment={props.createAppointment}
        clearAppointments={props.clearAppointments}
        helpMessage={props.helpMessage}
        appointmentsFromDB={props.appointmentsFromDB}
      />
    </div>

Bot.propTypes = {
  isSelecting:PropTypes.bool,
  handleChange:PropTypes.func,
  handleIsSelecting:PropTypes.func,
  createAppointment:PropTypes.func,
  clearAppointments:PropTypes.func,
  helpMessage:PropTypes.func
};



export default Bot;

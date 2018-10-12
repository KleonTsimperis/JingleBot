import React from 'react';
import DatePicker from 'react-datepicker';
import Feedback from './Feedback';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './components.css';

const Interactions = props =>

  <div className="flexItem2">
    <Feedback
      message={props.message}
      appointmentsFromDB={props.appointmentsFromDB}
    />
    {props.appointmentsFromDB.length !== 3 &&
      <DatePicker
        placeholderText="Click to select a date"
        selected={props.selected}
        onChange={props.handleChange}
        timeFormat="HH:mm"
        openToDate={props.startDate}
        showTimeSelect
        dateFormat="LLL"
        withPortal
        minDate={moment().add(1,"day")}
      />
    }
  </div>

Interactions.propTypes = {
  appointments:PropTypes.array,
  message:PropTypes.string,
  selected:PropTypes.object,
  handleChange:PropTypes.func,
  startDate:PropTypes.object
};

export default Interactions;

import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

const Appointments = props =>

  <div> Dates Booked
    {props.appointmentsFromDB.map(item=>
      <div key={item._id} className="Appointments">
        {item.appointmentAt.substring(0,22)}
      </div>
    )}
  </div>;

Appointments.propTypes = {
  appointmentsFromDB:PropTypes.array
};


export default Appointments;

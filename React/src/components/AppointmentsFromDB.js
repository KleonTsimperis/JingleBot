import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';


const AppointmentsFromDB = props =>

    <div className="AppointmentsFromDB">
      {props.appointmentsFromDB.map((appointment,index) =>
        <ExpansionPanel key={appointment._id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Appointment {index+1}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="h6">
                {appointment.appointmentAt}
              </Typography>
            </ExpansionPanelDetails>
            <Divider/>
            <ExpansionPanelActions>
              <Button size="small" variant="contained" color="secondary" onClick={()=>props.deleteAppointment(appointment._id)}>Cancel</Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
      )}
    </div>

AppointmentsFromDB.propTypes = {
  appointmentsFromDB:PropTypes.array
};


export default AppointmentsFromDB;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Bot from './components/Bot';
import AppointmentsFromDB from './components/AppointmentsFromDB';
import moment from 'moment';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';




class App extends Component {
  state = {
    isSelecting:false,
    appointments:[],
    message: 'Select Date',
    startDate: moment().add(1,"day"),
    appointmentsFromDB:[]
  };

  handleChange = date =>
    this.setState({
        startDate:date
      });

  handleSelect = date => {
    console.log(date);
    this.setState({
      startDate: moment()
    })
  };

  handleIsSelecting = () => {
    this.setState({isSelecting:!this.state.isSelecting})
    console.log(typeof this.state.startDate._d.toUTCString())
  };

  // canCreateAppointment = () => {
  //   if(this.state.appointments.length > 0){
  //     if (this.state.appointments.includes(this.state.startDate._d.toUTCString())){
  //       console.log('exist')
  //       this.setState({message:'This slot is not available anymore'});
  //       setTimeout(()=> this.setState({message:'Select New Date'}),3000);
  //       return false; // Includes date, so cantCreate
  //     } else return true; // Does not include date, so canCreate
  //   } return true; // No appointments yet, so canCreate
  // };


  canCreateAppointment = () => {
     if(this.state.appointmentsFromDB.length === 0){
       return true; // first appointment, so CAN create
     }
     for(let i = 0; i < this.state.appointmentsFromDB.length; i++){
       if(this.state.appointmentsFromDB[i].appointmentAt === this.state.startDate._d.toUTCString()){
         this.setState({message:'This slot is not available anymore'});
         setTimeout(()=> this.setState({message:'Select New Date'}),3000);
         return false; // Includes date, so CANT create
       }
     }
     return true; // No matching date, so CAN create
  };




  numberOfAppointments = () => {
    if(this.state.appointmentsFromDB.length === 3){
      return false;
    } else return true;
  };


  createAppointment = () => {
    console.log(this.canCreateAppointment());
    console.log(this.numberOfAppointments());
    if(this.canCreateAppointment() && this.numberOfAppointments()){
      this.setState({
        message:`Appointment booked for ${this.state.startDate._d.toUTCString()}`
        // appointments: [...this.state.appointments, this.state.startDate._d.toUTCString()],
      })
      setTimeout(()=> this.setState({message:'Select New Date'}),3000)
    }
    axios.post('/appointment', {
      appointmentAt:this.state.startDate._d.toUTCString()
    }).then(response => this.setState({appointmentsFromDB:[...this.state.appointmentsFromDB, response.data]}));
  };

  helpMessage = () => {
    this.setState({
      message:"Create and save up to 3 appointments. Start by inserting a date",
      isSelecting:true
    });
  };

  clearAppointments = () => this.setState({ appointments:[]});

  showAppointments = () =>
    axios.get('/appointment')
         .then(response => this.setState({appointmentsFromDB:response.data}));

  deleteAppointment = id => {
    axios.delete('/appointment', { data: { _id: id } });
    this.showAppointments();
  };



  render() {
    return (
      <div className="App">
        <Header
          showAppointments={this.showAppointments}
        />
        <AppointmentsFromDB
          appointmentsFromDB={this.state.appointmentsFromDB}
          deleteAppointment={this.deleteAppointment}
        />
        <Bot
          appointments={this.state.appointments}
          appointmentsFromDB={this.state.appointmentsFromDB}

          message={this.state.message}
          isSelecting={this.state.isSelecting}
          handleIsSelecting={this.handleIsSelecting}
          startDate={this.state.startDate}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          createAppointment={this.createAppointment}
          clearAppointments={this.clearAppointments}
          helpMessage={this.helpMessage}
        />
      </div>
    );
  }
}

export default App;

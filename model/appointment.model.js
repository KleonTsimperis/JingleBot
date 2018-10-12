const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let AppointmentSchema = mongoose.Schema({
  appointmentAt: {
    type: String,
    unique: true
  }
});

AppointmentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Appointment', AppointmentSchema);

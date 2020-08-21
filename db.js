const doctors = require('./doctors.json');
const appointments = require('./appointments.json');
const specialities = require('./specialities.json');
const hospitals = require('./hospitals.json');
const doctorApts = require('./doctorAppointments.json');
const initValues = require('./initValues.json');
const saveapts = require('./saveapts.json');
const sessions = require('./sessions.json');
const users = require('./users.json');
module.exports = function() {
    return {
        doctors  : doctors,
        appointments : appointments,
        specialities  : specialities, 
        hospitals : hospitals,
        doctorApts: doctorApts,
        initValues: initValues,
        saveapts : saveapts,
        sessions : sessions,
        users : users
    
    }
    }
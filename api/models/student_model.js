const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const AssignmentSchema = require('./assignment_model');
const index = require('./index');

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  goals: [{
    type: String,
    required: false
  }],
  assignments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: index.Assignments
  }]
});

module.exports = StudentSchema;

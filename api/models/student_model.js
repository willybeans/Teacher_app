const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AssignmentSchema = require('./assignment_model');

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
  assignments: [AssignmentSchema]
});

module.exports = StudentSchema;

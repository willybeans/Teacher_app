const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AssignmentSchema = require('./assignment_model');

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: false
  },
  assignments: [AssignmentSchema]
});

module.exports = StudentSchema;

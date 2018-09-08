const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = require('./student_model');

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Instrument: {
    type: String,
    required: false
  },
  students: [StudentSchema],
});

module.exports = TeacherSchema;

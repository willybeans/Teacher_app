const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = require('./studentSchema');

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  instrument: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  students: [StudentSchema]
});

module.exports = TeacherSchema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Students = require('./student_model');

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Instrument: {
    type: String,
    required: false
  },
  students: {
    type: [Students],
    required: false
  },
});

let teacher_model;

try {
  teacher_model = mongoose.model('TeacherSchema');
} catch (error) {
  teacher_model = mongoose.model('TeacherSchema', TeacherSchema);
}

module.exports = teacher_model;

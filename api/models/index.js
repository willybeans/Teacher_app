const mongoose = require('mongoose');
const TeacherSchema = require('./teacher_model');
const AssignmentSchema = require('./assignment_model');

module.exports = {
  Teachers: mongoose.model('Teachers', TeacherSchema),
  Assignments: mongoose.model('Assignments', AssignmentSchema)
};

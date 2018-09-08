const mongoose = require('mongoose');
const StudentSchema = require('./student_model');
const TeacherSchema = require('./teacher_model');
const AssignmentSchema = require('./assignment_model');

module.exports = {
  Teachers: mongoose.model('Teachers', TeacherSchema),
  Students: mongoose.model('Students', StudentSchema),
  Assignments: mongoose.model('Assignments', AssignmentSchema)
};

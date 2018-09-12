const mongoose= require('mongoose');
const TeacherSchema= require('./teacherSchema');
const AssignmentSchema= require('./assignmentSchema');

const models = {
  Teacher: mongoose.model('Teacher',TeacherSchema),
  Assignment: mongoose.model('Assignment',AssignmentSchema)
};
module.exports= models;

const mongoose= require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const TeacherSchema= require('./teacherSchema');
const AssignmentSchema= require('./assignmentSchema');

 const models = {
    Teacher: mongoose.model('Teacher',TeacherSchema),
    Assignment: mongoose.model('Assignment',AssignmentSchema)
  };
module.exports= models;
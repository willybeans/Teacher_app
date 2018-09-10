import { Router } from 'express';
import { Students } from './models';
// const StudentSchema = require('./models/student_model');
// const mongoose = require('mongoose');
// const Students = mongoose.model('Students', StudentSchema);

const student = Router();

student.post('/', (req, res) => {
  // grab student data for our post request
  // anything not in the body will be undefined
  console.log("post request: " + JSON.stringify(req.body));
  const name = req.body.name;
  const contact = req.body.email;
  const assignments = req.body.assignments;
  // check for any required attributes and create the student
  if (name) {
    console.log("fire create");
    var promise = Students.create({
      name: name,
      contact: contact,
      assignments: assignments
    });
    promise.then(student => {
      console.log("create student fired:" + student);
      console.log(res.status);
      return res.status(200).json({
        message: 'Student successfully created!',
        data: student
      });
    })
      .catch(err => {
        console.log(err);
        return res.status(400).json({
          message: 'Student was not created. Error: ' + err.toString()
        });
      });
  } else {
    return res.status(400).json({
      message: 'A name must be provided when creating Students'
    });
  }
});

export default student;

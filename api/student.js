import { Router } from 'express';
import StudentModel from './models/student_model';

const student = Router();

student.post('/', (req, res) => {
  // grab student data for our post request
  // anything not in the body will be undefined
  const name = req.body.name;
  const contact = req.body.contact;
  const assignments = req.body.assignments;
  // check for any required attributes and create the student
  if (name) {
    StudentModel
      .create({
        name,
        contact,
        assignments
      })
      .then(student => {
        return res.status(200).json({
          message: 'Student successfully created!',
          data: student
        });
      })
      .catch(err => {
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
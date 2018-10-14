var express = require("express");
var router = express.Router();
import models from "./models/models";
const Teacher = models.Teacher,
  Assignment = models.Assignment;

import mongoose from "mongoose";

router.get('/', (req,res) => {
  return res.status(400).json({
    message: 'get fired'
  });
});

router.post("/", (req, res) => {
  const teacherId = req.body.teacherId;
  // check for any required attributes and create the student
  if (teacherId) {
    Teacher.findById(teacherId, function(err, teacher) {
      if (err) res.json(err);

      const newStudent = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        goals: req.body.goals
      };
      // may also be addtoset? will need to test
      teacher.students.push(newStudent);
      teacher.save(err => {
        if (err) res.json(err);

        res.json(teacher);
      });
    });
  }
});

router.put('/', (req,res) => {
  return res.status(400).json({
    message: 'update fired'
  });
});

router.delete('/', (req, res) => {
  const studentId = req.body.studentId;
  const teacherId = req.body.teacherId;

  // if(studentId && teacherId) {
  //   Teacher.findById(teacherId, function(err, teacher){
  //     if (err) res.json(err);
  //     teacher.students.id(studentId).remove();
  //     teacher.save().then( data => {
        // Assignment.deleteMany({ student: studentId }, function(err){
        //   if (err) {
        //     console.error('err ' + err);
        //     return res.status(400).json({
        //       message: 'Failed to delete student/assignments',
        //     });
        //   }
        //console.log('teaher in api data ' + data);

          res.status(200).json({
            message: 'hoe',
            data: 'meowmix'
          });
        // });
    //  });
    //});
  //}

});

export default router;

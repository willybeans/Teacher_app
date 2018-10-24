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
      teacher.students.push(newStudent);
      teacher.save(err => {
        if (err) res.json(err);

        res.json(teacher);
      });
    });
  }
});

router.put('/', (req,res) => {
  console.log("hello api");
  console.log(req.body);
  const studentId = req.body.studentId;
  const teacherId = req.body.teacherId;
  let student;

  if(studentId && teacherId) {
    Teacher.findById(teacherId).exec(function(err, teacher){
      if (err) res.json(err);
      student = teacher.students.id(studentId);
      if(student){
        for (let field in student) {
          const testType = typeof student[field];
          if((field !== '_id' && field !== "assignments") && (testType !== "function")){
            if(req.body[field] !== undefined) {
              student[field] = req.body[field];
            }
          }
        }
        teacher.save().then(data => {
          res.status(200).json(data);
        });
      }
    });
  }
});

router.delete('/', (req, res) => {
  const studentId = req.body.studentId;
  const teacherId = req.body.teacherId;

  if(studentId && teacherId) {
    Teacher.findById(teacherId, function(err, teacher){
      if (err) res.json(err);
      teacher.students.id(studentId).remove();
      teacher.save().then( data => {

        Assignment.deleteMany({ student: studentId }, function(err){
          if (err) {
            console.error('err ' + err);
            return res.status(400).json({
              message: 'Failed to delete student/assignments',
            });
          }

          res.status(200).json(data);
        });
     });
    });
  }

});

export default router;

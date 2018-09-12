var express = require("express");
var router = express.Router();
import models from "./models/models";
const Teacher = models.Teacher;
import mongoose from "mongoose";

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

export default router;

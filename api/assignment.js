var express = require("express");
var router = express.Router();
import models from "./models/models";
const Assignment = models.Assignment;
const Teacher = models.Teacher;

router.get('/', (req,res) => {
  return res.status(400).json({
    message: 'get fired'
  });
});

router.post("/", function(req, res) {
  const studentId = req.body.id;

  if (studentId) {
    Teacher.findOne({ students: { $elemMatch: { _id: studentId } } }, function(
      err,
      teacher
    ) {
      if (err) res.json(err);
      const student = teacher.students.id(studentId);
      const assignment = new Assignment({
        date: Date.now(),
        title: req.body.title,
        composer: req.body.composer,
        sheet_music: req.body.sheet,
        recording: req.body.recording,
        notes: req.body.notes,
        student: student
      });

      assignment.save();
      student.assignments.push(assignment);
      teacher.save();
    });
  }
});

router.put('/', (req,res) => {
  //const assignmentID = req.body.assignmentID;
  return res.status(400).json({
    message: 'update fired'
  });
});

router.delete('/', (req, res) => {
  //const assignmentID = req.body.assignmentID;
  return res.status(400).json({
    message: 'delete fired',
  });
});


export default router;

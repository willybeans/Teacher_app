var express = require("express");
var router = express.Router();
import models from "./models/models";
const Assignment = models.Assignment;
const Teacher = models.Teacher;

router.get('/:studentId', (req,res) => {
  const id = req.params.studentId;
  Assignment.find({student: id})
    .then(data => {
      res.status(200).json({
        message: 'assignment get fired',
        body: {
          id: id,
          data: data
        }
      });
    })
    .catch(err => console.error(err));

});

router.post("/", function(req, res) {
  const studentId = req.body.studentId;

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
        sheet_music: req.body.music,
        recording: req.body.recording,
        notes: req.body.notes,
        student: student
      });

      assignment.save();
      student.assignments.push(assignment);
      teacher.save();
      return res.status(200).json({
        message: 'add assignment fired',
        assignment: assignment
      });
    });
  }
});

router.put('/', (req,res) => {
  const assignmentId = req.body.assignment.id;
  if(assignmentId) {
    Assignment.findByIdAndUpdate(assignmentId, {
      $set: {
        title: req.body.assignment.title,
        composer: req.body.assignment.composer,
        recording: req.body.assignment.recording,
        sheet_music: req.body.assignment.sheet_music,
        notes: req.body.assignment.notes
      }
    }, {new: true}, function(err, data) {
      if(err) console.error(err);
      return res.status(200).json({
        data
      });
    });
  }

});

router.delete('/', (req, res) => {
  //const assignmentID = req.body.assignmentID;
  return res.status(200).json({
    message: 'delete fired',
  });
});


export default router;

var express = require("express");
var router = express.Router();
import models from "./models/models";
const Teacher = models.Teacher;

router.get("/", function(req, res) {
  const teacherId = req.id;

  Teacher.findById(teacherId)
    .populate({ path: "students.assignments" })
    .exec(function(err, docs) {
      if (err) res.json(err);
      res.json(docs);
    });
});

router.post("/", (req, res) => {
  //populate with req
  const newTeacher = {
    name: req.body.name,
    instrument: req.body.instrument,
    email: req.body.email
  };
  Teacher.create(newTeacher)
    .then(data => {
      res.status(200).json({
        message: 'teacher created',
        teacher: data
      })
    })
    .catch(err => console.error(err));
});

router.put('/', (req,res) => {
  const teacherId = req.body.teacherId;

  if(teacherId) {
    Teacher.findByIdAndUpdate(teacherId, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        instrument: req.body.instrument
      }}, {new: true}, function(err, data) {
      if(err) console.error(err);

      return res.status(200).json({
        name: data.name,
        email: data.email,
        instrument: data.instrument
      });

    });
  }

});

router.delete('/', (req, res) => {
  const teacherID = req.body.teacherID;

  return res.status(400).json({
    message: 'delete fired',
    res: req.body
  });
});

export default router;

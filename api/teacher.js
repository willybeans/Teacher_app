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
    .catch(err => console.log(err));
});

router.put('/', (req,res) => {
  return res.status(400).json({
    message: 'update fired'
  });
});

router.delete('/', (req, res) => {
  const teacherID = req.body.teacherID;

  return res.status(400).json({
    message: 'delete fired',
    res: req.body
  });
});

export default router;

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
      console.log(docs);
      res.json(docs);
    });
});
router.post("/", (req, res) => {
  //populate with req
  console.log(req);
  const newTeacher = {
    name: req.body.name,
    instrument: req.body.instrument,
    email: req.body.email
  };
  Teacher.create(newTeacher);
  

});

export default router;

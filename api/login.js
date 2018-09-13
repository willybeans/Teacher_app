var express = require("express");
var router = express.Router();
import models from "./models/models";
const Teacher = models.Teacher;

router.get('/:email', function(req, res) {
  const email = req.params.email;
  Teacher.findOne({email: email})
    .populate({ path: 'students'})
    .then(data => {
      return res.status(200).json({
        message: 'login fired',
        body: {
          _id: data._id,
          name: data.name,
          instrument: data.instrument,
          email: data.email,
          students: data.students
        }
      });
    })
    .catch( err => console.log(err));
});
export default router;

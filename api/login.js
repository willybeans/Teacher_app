var express = require("express");
var router = express.Router();
import models from "./models/models";
const Teacher = models.Teacher;

router.get("/", function(req, res) {
  const email = req.body.email;
  Teacher.findOne({email: email})
  .then(data => {
    console.log("teacher: " + data)
  })
  return res.status(400).json({
    message: 'login fired',
    reqbody: req.body
  });
});
export default router;

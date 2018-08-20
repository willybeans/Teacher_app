const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Instrument: {
    type: String,
    required: false
  },
  student_list {
  	type: []
  },	
});

let teacher_model;
try {
  model = mongoose.model('TeacherSchema');
} catch (error) {
  model = mongoose.model('TeacherSchema', UrlSchema);
}

module.exports = teacher_model;

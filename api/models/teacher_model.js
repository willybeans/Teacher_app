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
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'StudentSchema'
  }],
});

let teacher_model;

try {
  teacher_model = mongoose.model('TeacherSchema');
} catch (error) {
  teacher_model = mongoose.model('TeacherSchema', TeacherSchema);
}

module.exports = teacher_model;

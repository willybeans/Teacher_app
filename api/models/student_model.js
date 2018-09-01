const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: false
  },
  assignments: [{
    type: Schema.Types.ObjectId,
    ref: 'AssignmentSchema'
  }]
});


let student_model;
try {
  student_model = mongoose.model('StudentSchema');
} catch (error) {
  student_model = mongoose.model('StudentSchema', StudentSchema);
}

module.exports = student_model;

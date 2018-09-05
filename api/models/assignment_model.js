const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  composer: {
    type: String,
    required: false
  },
  sheet_music: {
    type: String,
    required: false
  },
  recording: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: true
  }

});

let assignment_model;
try {
  assignment_model = mongoose.model('AssignmentSchema');
} catch (error) {
  assignment_model = mongoose.model('AssignmentSchema', AssignmentSchema);
}

module.exports = assignment_model;

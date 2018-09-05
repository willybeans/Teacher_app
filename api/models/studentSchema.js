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
    ref: 'Assignment'
  }]
});

module.exports = StudentSchema;

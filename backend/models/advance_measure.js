const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  freelancerId: {
    type: Object,
    required: true
  },
  taskid: {
    type: Object,
    required: true
  },
  advanced: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('advance', projectSchema);
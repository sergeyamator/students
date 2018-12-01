const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Mentor', MentorSchema);

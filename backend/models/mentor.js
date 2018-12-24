const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  technologies: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Mentor', MentorSchema);

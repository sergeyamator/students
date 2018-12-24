const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  academyId: {
    type: String,
    unique: true,
    trim: true,
  },
  gitId: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Mentor',
  },
});

module.exports = mongoose.model('Student', UserSchema);

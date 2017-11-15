const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  academyId: {
    type: String,
    unique: true,
    required: true,
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
});
const User = mongoose.model('Student', UserSchema);
module.exports = User;

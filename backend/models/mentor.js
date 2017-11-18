const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// hashing a password before saving it to the database
UserSchema.pre('save', function(next) {
  const user = this;

  bcrypt.hash(user.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

const User = mongoose.model('Mentor', UserSchema);
module.exports = User;

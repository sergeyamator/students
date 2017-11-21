const mongoose = require('mongoose');
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

exports.login = (email, password, cb) => {
  User.findOne({ email })
    .exec((err, user) => {
      if (err) {
        return cb(err);
      } else if (!user) {
        const err = new Error('User not found.');
        err.status = 401;
        return cb(err);
      }

      bcrypt.compare(password, user.password, (err, result) => {
        return result
          ? cb(null, user)
          : cb(err);
      });
    });
};

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
exports.Mentor = User;

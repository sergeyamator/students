const express = require('express');
const jwt = require('jsonwebtoken');
const Mentor = require('../../models/mentor');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../../config');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({
      name: 'AuthorizationError',
      status: 400,
      message: 'You did not provide email or password',
    });
  }

  try {
    Mentor.findOne({ email })
      .exec((err, mentor) => {
        if (!mentor) {
          res.status(400);
          res.send('Wrong user email or password');
        }

        bcrypt.compare(password, mentor.password)
          .then((result) => {
            if (result) {
              const token = jwt.sign({
                sub: mentor.id,
                name: mentor.name,
              }, JWT_SECRET);

              res
                .status(200)
                .json(token);
            } else {
              res.status(401);
              res.send('Password is wrong');
            }
          });
      });
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

module.exports = router;

const express = require('express');
const jwt = require('jsonwebtoken');
const Mentor = require('../../models/mentor');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    res.send('You did not provide username or password');
    return;
  }

  try {
    Mentor.findOne({ email })
      .exec((err, mentor) => {
        bcrypt.compare(password, mentor.password).then((result) => {
          if (result) {
            const token = jwt.sign({
              sub: mentor.id,
              name: mentor.name,
            }, process.env.SECRET);

            res.status(200);
            res.json(token);
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

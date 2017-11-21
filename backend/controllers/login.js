const express = require('express');
const mongoose = require('mongoose');
const login = require('../models/mentor').login;
const jwt = require('jsonwebtoken');


const router = express.Router();
const Mentor = mongoose.model('Mentor');

router.post('/', loginFn);

async function loginFn(req, res) {
  const { email, password } = req.body;

  login(email, password, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, 'superSecret', {
      expiresIn: 1440, // expires in 24 hours
    });

    res.json({
      success: true,
      message: 'Enjoy your token!',
      token,
    });
  });
}

module.exports = router;

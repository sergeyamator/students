const express = require('express');
const mongoose = require('mongoose');
require('../models/mentor');

const router = express.Router();
const User = mongoose.model('Mentor');

router.post('/', async (req, res) => {
  const { password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    res.status(400);
    res.send('Password and confirm password are not the same');
  }

  try {
    const user = new User(req.body);
    await user.save();
    res.send('saved');
  } catch (e) {
    throw Error(e);
  }
});

module.exports = router;

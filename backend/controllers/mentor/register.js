const express = require('express');
const passport = require('passport');

const router = express.Router();

module.exports = async (req, res) => {
  const { password, passwordConfirm } = req.body;
  if (password !== passwordConfirm) {
    res.status(400);
    res.send('Password and confirm password are not the same');
  }

  router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  }));

  return router;
};


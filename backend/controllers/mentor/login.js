const express = require('express');
const passport = require('passport');
require('../../models/mentor');

const router = express.Router();


router.get('/', (req, res) => {
  if (req.isAu)
  res.send('GET ON LOGIN PAGE');
});

router.post('/', (req, res, done) => {
  passport.authenticate('local', (_err, user) => {
    req.login(user, (err) => {
      res.send('Вы удачно прошли аутентификацию!');
    });
  })(req, res, done);
});


module.exports = router;

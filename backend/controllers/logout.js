const express = require('express');

const router = express.Router();

router.get('/', logout);

function logout(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });
  }
}

module.exports = router;

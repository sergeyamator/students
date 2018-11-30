const express = require('express');
const jwt = require('jsonwebtoken');
const Mentor = require('../../models/mentor');
const { JWT_SECRET } = require('../../config');

const router = express.Router();

router.get('/', (req, res) => {
  const authorizationHeader = req.get('Authorization');

  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      try {
        const mentor = await Mentor.findById(decoded.sub);

        res.json({
          email: mentor.email,
          username: mentor.username,
        });
      } catch (e) {
        console.log(e);
        res.status(500);
        res.json(e);
      }
    });
  }
});

module.exports = router;

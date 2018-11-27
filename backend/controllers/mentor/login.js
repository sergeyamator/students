const express = require('express');
const jwt = require('jsonwebtoken');
require('../../models/mentor');


const router = express.Router();
const userData = {
  name: 'admin',
  password: 'admin',
  id: 123424,
};


router.get('/', (req, res) => {
  res.send('GET ON LOGIN PAGE');
});

router.post('/', (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(400);
    res.send('You did not provide username or password');
    return;
  }

  if (name !== userData.name && password !== userData.password) {
    res.status(401);
    res.send('Name or password are wrong');
    return;
  }

  const token = jwt.sign({
    sub: userData.id,
    name: userData.name,
  }, process.env.SECRET);

  res.status(200);
  res.json(token);
});


module.exports = router;

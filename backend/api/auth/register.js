const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Mentor = require('../../models/mentor');
const { JWT_SECRET } = require('../../config');

const saltRounds = 10;

module.exports = async (req, res) => {
  const { password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    res.status(400);
    res.send('Password and confirm password are not the same');
  }

  const mentor = new Mentor(req.body);

  try {
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    mentor.password = hash;
  } catch (e) {
    res.status(500);
    res.send(e);
  }

  try {
    const mentorData = await mentor.save();
    const token = jwt.sign({
      sub: mentorData.id,
      name: mentorData.name,
    }, JWT_SECRET);

    res.status(200);
    res.json(token);
  } catch (e) {
    res.status(500);
    res.json(e);
  }
};

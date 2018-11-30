const expressjwt = require('express-jwt');
const loginController = require('../../api/auth/login');
const registerController = require('../../api/auth/register');
const mentorController = require('../../api/mentor');
const studentsController = require('../../api/students');

const jwtCheck = expressjwt({
  secret: process.env.SECRET,
});

module.exports = (app) => {
  app.use('/api/login', loginController);
  app.use('/api/register', registerController);
  app.use('/api/mentor', jwtCheck, mentorController);

  app.use('/api/students', jwtCheck, studentsController);

  app.use((err, req, res, next) => {
    console.log('Tracking error', JSON.stringify(err, false, 2));

    res
      .status(err.status)
      .json({
        name: err.name,
        error: err.message,
        status: err.status,
      });

  });
};

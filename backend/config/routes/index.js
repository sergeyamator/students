const expressjwt = require('express-jwt');
const loginController = require('../../api/mentor/login');
const registerController = require('../../api/mentor/register');
const studentsController = require('../../api/students');

const jwtCheck = expressjwt({
  secret: process.env.SECRET,
});

module.exports = (app) => {
  app.use('/api/login', loginController);
  app.use('/api/register', registerController);
  app.use('/api/students', jwtCheck, studentsController);
};

const express = require('express');
const bodyParser = require('body-parser');
const expressjwt = require('express-jwt');
require('dotenv').config();
// const registerController = require('./controllers/mentor/register');
const loginController = require('./api/mentor/login');
const registerController = require('./api/mentor/register');
const studentsController = require('./api/students');


const jwtCheck = expressjwt({
  secret: process.env.SECRET,
});


require('./config/db/mongoose');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.use('/api/login', loginController);
app.use('/api/register', registerController);
app.use('/api/students', jwtCheck, studentsController);

app.listen(process.env.PORT || 3000);

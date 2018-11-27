const express = require('express');
const bodyParser = require('body-parser');
const expressjwt = require('express-jwt');
require('dotenv').config();
// const registerController = require('./controllers/mentor/register');
const loginController = require('./controllers/mentor/login');
const studentsController = require('./controllers/students');


const jwtCheck = expressjwt({
  secret: process.env.SECRET,
});


require('./config/db/mongoose');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/login', loginController);
app.use('/students', jwtCheck, studentsController);

app.listen(process.env.PORT || 3000);

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const registerController = require('./controllers/mentor/register');

const loginController = require('./controllers/mentor/login');
const studentsController = require('./controllers/students');

require('dotenv').config();
require('./config/db/mongoose');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET,
  store: new MongoStore({ url: process.env.DATABASE }),
}));

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use('/register', registerController);
app.use('/login', loginController);
app.use('/students', studentsController);
app.use('/', (req, res) => res.send('MAIN PAGE'));
app.listen(process.env.PORT);

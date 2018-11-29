const express = require('express');

require('dotenv').config();
// const registerController = require('./controllers/mentor/register');


require('./config/db/mongoose');

const app = express();



require('./config/middlewares')(app);
require('./config/routes')(app);

app.listen(process.env.PORT || 3000);

// подключение express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// создаем объект приложения
const app = express();

// создаем парсер для данных в формате json
const jsonParser = bodyParser.json();
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/register', (req, res) => {
  const {email, password, passwordConfirm} = req.body;

  if (password !== passwordConfirm) {
    // send error
  }

  res.redirect(303, '/thank-you');
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);

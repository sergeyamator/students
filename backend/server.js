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

/*app.post('/register', jsonParser, (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }

  console.log(request.body);
  return response.json(`${request.body.userName} - ${request.body.userAge}`);
});*/

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);

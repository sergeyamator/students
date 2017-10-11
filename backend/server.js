// подключение express
const express = require('express');
const bodyParser = require('body-parser');

// создаем объект приложения
const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(`${__dirname}/public`));

app.post('/register', urlencodedParser, (request, response) => {
  if (!request.body) {
    return response.sendStatus(400)
  }

  console.log(request.body);
  return response.send(`${request.body.userName} - ${request.body.userAge}`);
});
// определяем обработчик для маршрута '/'
app.get('/', (request, response) => {
  // отправляем ответ
  response.send('<h2>Привет Express!</h2>');
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);

import React from 'react';
import Checkbox from '../Checkbox/index';
import Button from '../Button/index';
import Title from '../Title/index';
import './style.scss';

const Form = () => (
  <form
    method="post"
    action="#"
    className="form"
  >
    <Title>Войти в личный кабинет</Title>
    <div className="log-in__field">
      <input
        type="email"
        className="input"
        name="email"
        placeholder="Введите свой email"
        required
      />
    </div>
    <div className="log-in__field">
      <input
        type="password"
        name="password"
        className="input"
        required
        placeholder="Введите свой пароль"
      />
    </div>
    <div className="form-button">
      <Button type="submit">Войти</Button>
      <Button type="reset">Очистить</Button>
    </div>
    <Checkbox label="Я новый пользователь" />
  </form>
);

export default Form;

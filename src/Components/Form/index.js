import React from 'react';
import ButtonClear from '../ButtonClear/index';
import ButtonSubmit from '../ButtonSubmit/index';
import Checkbox from '../Checkbox/index';
import './style.scss';

const Form = () => (
  <form
    method="post"
    action="#"
    className="log-in"
  >
    <h1 className="description">Войти в личный кабинет</h1>
    <div className="log-in__field">
      <input
        type="email"
        className="log-in-input email"
        name="email"
        placeholder="Введите свой email"
        required
      />
    </div>
    <div className="log-in__field">
      <input
        type="password"
        name="password"
        className="log-in-input password"
        required
        placeholder="Введите свой пароль"
      />
    </div>
    <div className="log-in__button">
      <ButtonSubmit>Войти</ButtonSubmit>
      <ButtonClear>Очистить</ButtonClear>
    </div>
    <Checkbox label="Я новый пользователь" />
  </form>
);

export default Form;

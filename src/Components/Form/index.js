import React from 'react';
import Checkbox from '../Checkbox/index';
import Button from '../Button/index';
import Title from '../Title/index';
import Field from '../Field/index';
import './style.scss';

const Form = () => (
  <form
    method="post"
    action="/register"
    className="form"
  >
    <Title>Войти в личный кабинет</Title>
    <Field name="email" type="email" placeholder="Введите свой email" className="input" />
    <Field name="password" type="password" placeholder="Введите свой пароль" className="input" />
    <Field name="passwordConfirm" type="password" placeholder="Подтвердите пароль" className="input" />
    <div className="form-button">
      <Button type="submit">Войти</Button>
      <Button type="reset">Очистить</Button>
    </div>
    <Checkbox label="Я новый пользователь" />
  </form>
);

export default Form;

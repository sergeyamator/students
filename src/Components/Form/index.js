import React from 'react';
import ButtonClear from '../ButtonClear/index';
import ButtonSubmit from '../ButtonSubmit/index';
import Checkbox from '../Checkbox/index';
import '../../styles.scss';

const Form = () => (
  <form
    method="post"
    action="#"
  >
    <input
      type="email"
      className="email"
      name="email"
      placeholder="Введите свой email"
    />
    <input
      type="password"
      name="password"
      className="password"
    />
    <Checkbox label="Я новый пользователь" />
    <ButtonSubmit>Отправить</ButtonSubmit>
    <ButtonClear>Очистить форму</ButtonClear>
  </form>
);

export default Form;

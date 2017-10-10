import React from 'react';
import ButtonClear from '../ButtonClear/index';
import ButtonSubmit from '../ButtonSubmit/index';
import '../../styles.scss';

const Form = () => (
  <form
    method="post"
    action="#"
  >
    <input
      type="email"
      className="email"
      placeholder="Введите свой email"
    />
    <input
      type="password"
      name="password"
      className="password"
    />
    <label htmlFor="user" className="new-user">
      Я новый пользователь
      <input
        id="user"
        type="checkbox"
        name="checkbox"
      />
    </label>
    <ButtonSubmit>Отправить</ButtonSubmit>
    <ButtonClear>Очистить форму</ButtonClear>
  </form>
);

export default Form;

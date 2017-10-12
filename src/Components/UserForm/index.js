import React from 'react';
import Button from '../Button/index';
import Title from '../Title/index';
import Field from '../Field/index';
import './style.scss';

const UserForm = () => (
  <form
    method="post"
    action="#"
    className="form form--user"
  >
    <Title>Добавить нового ученика</Title>
    <Field name="email" type="email" placeholder="Введите email ученика" className="input" />
    <Field name="github" type="text" placeholder="Введите github ученика" className="input" />
    <Field name="skype" type="text" placeholder="Введите skype ученика" className="input" />
    <Field name="academy" type="text" placeholder="Его профиль в HTML Academy" className="input" />
    <div className="form-button">
      <Button type="submit">Сохранить</Button>
    </div>
  </form>
);

export default UserForm;

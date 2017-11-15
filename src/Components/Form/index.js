import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/index';
import Button from '../Button/index';
import Title from '../Title/index';
import Field from '../Field/index';
import './style.scss';

class Form extends Component {
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  state = {};

  onInputChange = (data) => {
    this.setState({
      ...this.state,
      ...data,
    });
  };

  onSave = (e) => {
    e.preventDefault();

    if (this.state.newUser) {
      this.props.onRegister(this.state);
      return;
    }

    this.props.onLogin();
  };

  isDisabled = () => !(
    this.state.email &&
    this.state.password &&
    this.state.passwordConfirm &&
    this.state.name
  );

  render() {
    return (
      <form
        method="post"
        className="form"
        onSubmit={this.onSave}
      >
        <Title>Войти в личный кабинет</Title>

        <Field
          name="name"
          type="text"
          placeholder="Введите свое имя"
          className="input"
          onChange={this.onInputChange}
        />

        <Field
          name="email"
          type="email"
          placeholder="Введите свой email"
          className="input"
          onChange={this.onInputChange}
        />

        <Field
          name="password"
          type="password"
          placeholder="Введите свой пароль"
          className="input"
          onChange={this.onInputChange}
        />

        <Field
          name="passwordConfirm"
          type="password"
          placeholder="Подтвердите пароль"
          className="input"
          onChange={this.onInputChange}
        />

        <div className="form-button">
          <Button type="submit" disabled={this.isDisabled()}>Войти</Button>
          <Button type="reset">Очистить</Button>
        </div>

        <Checkbox label="Я новый пользователь"/>
      </form>
    );
  }
}

export default Form;

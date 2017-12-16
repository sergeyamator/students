import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/index';
import Button from '../Button/index';
import Title from '../Title/index';
import Field from '../Field/index';
import './style.scss';

class AuthorizationForm extends Component {
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    newUser: false,
  };

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

  onCheckboxChange = (e) => {
    this.setState({
      ...this.state,
      newUser: e.target.checked,
    });
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

        {
          this.state.newUser ?
            <Field
              name="passwordConfirm"
              type="password"
              placeholder="Подтвердите пароль"
              className="input"
              onChange={this.onInputChange}
            /> :
            null
        }

        <div className="form-button">
          <Button type="submit" disabled={this.isDisabled()}>Войти</Button>
          <Button type="reset" disabled={false}>Очистить</Button>
        </div>

        <Checkbox onChange={this.onCheckboxChange} label="Я новый пользователь" />
      </form>
    );
  }
}

export default AuthorizationForm;

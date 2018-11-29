import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Checkbox, Title, Field } from '../../Components/';
import { login, register } from '../../actions';
import './style.scss';

class AuthorizationForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
  }

  state = {
    newUser: false,
  }

  onInputChange = (data) => {
    this.setState({
      ...this.state,
      ...data,
    });
  }

  onSave = (e) => {
    e.preventDefault();

    if (this.state.newUser) {
      this.props.register(this.state);
      return;
    }

    this.props.login(this.state);
  }

  onCheckboxChange = (e) => {
    this.setState({
      ...this.state,
      newUser: e.target.checked,
    });
  }

  isDisabled = () => !(
    this.state.email &&
    this.state.password &&
    this.state.username
  )

  render() {
    return (
      <form
        method="post"
        className="form"
        onSubmit={this.onSave}
        name={this.state.newUser ? 'register' : 'login'}
      >
        <Title>Войти в личный кабинет</Title>

        { this.state.newUser && (
          <Field
            name="username"
            type="text"
            placeholder="Введите свое имя"
            className="input"
            onChange={this.onInputChange}
          />
        )
        }

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
          this.state.newUser && (
            <Field
              name="passwordConfirm"
              type="password"
              placeholder="Подтвердите пароль"
              className="input"
              onChange={this.onInputChange}
            />
          )
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

function mapDispatchToProps(dispatch) {
  return {
    login(userData) {
      dispatch(login(userData));
    },
    register(userData) {
      dispatch(register(userData));
    },
  };
}

const AuthorizationFormWithConnect = connect(undefined, mapDispatchToProps)(AuthorizationForm);
export { AuthorizationFormWithConnect };


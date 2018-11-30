import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button, Checkbox, Title, Field,
} from '../../components';
import { auth } from '../../actions';
import { isLoggedIn } from '../../helpers';
import styles from './style.scss';

class AuthorizationForm extends Component {
  state = {
    newUser: false,
  }

  onInputChange = (data) => {
    this.setState(state => ({
      ...state,
      ...data,
    }));
  }

  onSave = (e) => {
    e.preventDefault();
    const { state, props } = this;

    if (state.newUser) {
      props.auth('register', this.state);
      return;
    }

    props.auth('login', this.state);
  }

  onCheckboxChange = (e) => {
    this.setState(state => ({
      ...state,
      newUser: e.target.checked,
    }));
  }

  isDisabled = () => {
    const { state: { email, password } } = this;
    return !(email && password);
  }

  render() {
    const { props, state } = this;
    if (props.isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <section className={styles.formWrapper}>
        <form
          method="post"
          className={styles.form}
          onSubmit={this.onSave}
          name={state.newUser ? 'register' : 'login'}
        >
          <Title>Войти в личный кабинет</Title>

          { state.newUser && (
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
            state.newUser && (
              <Field
                name="passwordConfirm"
                type="password"
                placeholder="Подтвердите пароль"
                className="input"
                onChange={this.onInputChange}
              />
            )
          }

          <div className={styles.formButton}>
            <Button type="submit" disabled={this.isDisabled()}>Войти</Button>
            <Button type="reset" disabled={false}>Очистить</Button>
          </div>

          <Checkbox onChange={this.onCheckboxChange} label="Я новый пользователь" />
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
});

function mapDispatchToProps(dispatch) {
  return {
    auth(url, userData) {
      dispatch(auth(url, userData));
    },
  };
}

const AuthorizationFormWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorizationForm);

export { AuthorizationFormWithConnect };

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Button = ({ type, disabled, children }) => (
  <button
    className={styles.button}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: true,
  type: 'button',
};

export { Button };

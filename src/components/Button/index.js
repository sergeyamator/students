import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Button = props => (
  <button
    className={styles.button}
    type={props.type}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: true,
};

export { Button };

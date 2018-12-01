import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Button = ({
  type,
  disabled,
  children,
  href,
}) => {
  if (href) {
    return (
      <a href={href} className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  href: '',
};

export { Button };

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = props => (
  <button
    className="button"
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

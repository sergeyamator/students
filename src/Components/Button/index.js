import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = props => (
  <button
    className="button"
    type={props.type}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;

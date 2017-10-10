import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';

const ButtonClear = props => (
  <button
    className="button-clear"
    type="reset"
  >
    {props.children}
  </button>
);

ButtonClear.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonClear;

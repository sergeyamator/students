import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';

const ButtonSubmit = props => (
  <button
    className="button-submit"
    type="submit"
  >
    {props.children}
  </button>
);

ButtonSubmit.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonSubmit;

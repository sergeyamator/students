import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = props => (
  <input
    type={props.type}
    className={props.className}
    name={props.name}
    placeholder={props.placeholder}
    required
  />
);

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Field;

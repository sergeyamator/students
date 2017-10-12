import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function onChangeHandler(e, props) {
  props.onChange({ [props.name]: e.target.value });
}

const Field = props => (

  <input
    type={props.type}
    className={props.className}
    name={props.name}
    placeholder={props.placeholder}
    required
    onChange={(e) => {
      onChangeHandler(e, props);
    }}
  />
);

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Field;

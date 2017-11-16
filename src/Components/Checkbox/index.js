import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Checkbox = props => (
  <label htmlFor="user" className="checkbox">
    {props.label}
    <input
      id="user"
      type="checkbox"
      name="checkbox"
      className="checkbox-input"
      onChange={props.onChange}
    />
    <span className="checkbox-element">check</span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Checkbox = props => (
  <label htmlFor="user" className="new-user">
    {props.label}
    <input
      id="user"
      type="checkbox"
      name="checkbox"
      className="checkbox-input"
    />
    <span className="checkbox-element">check</span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;

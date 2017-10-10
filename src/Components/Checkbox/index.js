import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';

const Checkbox = props => (
  <label htmlFor="user" className="new-user">
    {props.label}
    <input
      id="user"
      type="checkbox"
      name="checkbox"
    />
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;

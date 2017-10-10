import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';

const Checkbox = props => (
  <label htmlFor="user" className="new-user">
    {props.children}
    <input
      id="user"
      type="checkbox"
      name="checkbox"
    />
  </label>
);

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Checkbox;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Checkbox = ({ label, onChange }) => (
  <label htmlFor="user" className={styles.checkbox}>
    {label}
    <input
      id="user"
      type="checkbox"
      name="checkbox"
      className={styles.checkboxInput}
      onChange={onChange}
    />
    <span className={styles.checkboxElement}>check</span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Checkbox };

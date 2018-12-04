import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function onChangeHandler(e, props) {
  props.onChange({ [props.name]: e.target.value });
}

const Field = (props) => {
  const { type, name, placeholder } = props;

  return (
    <input
      type={type}
      className={styles.input}
      name={name}
      placeholder={placeholder}
      required
      onChange={(e) => {
        onChangeHandler(e, props);
      }}
    />
  );
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export { Field };

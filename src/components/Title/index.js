import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Title = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export { Title };

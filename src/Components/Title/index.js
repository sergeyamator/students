import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Title = props => (
  <h1 className="main-title">{props.children}</h1>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export { Title };

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const testComponent = props => (
  <h1
    className="page-title"
  >
    {props.children}
  </h1>
);

testComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

export default testComponent;

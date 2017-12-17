import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const StudentName = props => (
  <h1 className={props.className}>
   {props.name}
  </h1>
);

StudentName.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default StudentName;

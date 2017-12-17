import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Checkbox from '../Checkbox/index';

const Module = props => (
  <div className='module'>
    <Checkbox label={props.label} />
  </div>
);

Module.propTypes = {
}

export default Module;

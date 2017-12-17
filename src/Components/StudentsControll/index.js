import React from 'react';
import PropTypes from 'prop-types';
import StudentName from '../StudentName/index';
import Modules from '../Modules/index';
import './style.scss';

const StudentsControll = props => (
  <div className='container--bg'>
    <StudentName
      className='student-name'
      name='Малахов Андрей'
    />
    <Modules />
  </div>
);

export default StudentsControll;

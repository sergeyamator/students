import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Module from '../Module/index';
import './style.scss';

const AllModules = [
  'Модуль 1',
  'Модуль 2',
  'Модуль 3',
  'Модуль 4',
  'Модуль 5',
];

class Modules extends Component {
  state = {
    data: AllModules
  }
  render() {
    const data = this.state.data;
    let newModule;

    if(data.length > 0) {
      newModule = data.map(function(module) {
        return (
          <div className='modules'>
            <Module label={module} />
          </div>
        );
      })
    } else {
      newModule = <p>Модули не найдены</p>
    }

    return (
      <div>
        {newModule}
      </div>
    );
  }
}

export default Modules;

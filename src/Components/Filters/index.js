import React from 'react';
import filtersAction from '../../actions/filters';
import './styles.css';

export default ({setFilter}) => {
  function setVisibleFilter(filter) {
    setFilter(filtersAction(filter));
  }

  return (
    <div className="filters">
      <a onClick={() => setVisibleFilter('ascPopularity')}>Sort by &uarr; popularity</a>
      <a onClick={() => setVisibleFilter('descPopularity')}>Sort by &darr; popularity</a>
      <a onClick={() => setVisibleFilter('ascDate')}>Sort by &uarr; date</a>
      <a onClick={() => setVisibleFilter('descDate')}>Sort by &darr; date</a>
    </div>
  );
};

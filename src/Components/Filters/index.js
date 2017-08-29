import React from 'react';
import filtersAction from '../../actions/filters';

export default ({setFilter}) => {
  function setVisibleFilter(filter) {
    setFilter(filtersAction(filter));
  }

  return (
    <div>
      <a onClick={() => setVisibleFilter('ascPopularity')}>Sort by &uarr; popularity</a>
      <a onClick={() => setVisibleFilter('descPopularity')}>Sort by &darr; popularity</a>
      <a onClick={() => setVisibleFilter('ascDate')}>Sort by &uarr; date</a>
      <a onClick={() => setVisibleFilter('descDate')}>Sort by &darr; date</a>
    </div>
  );
};

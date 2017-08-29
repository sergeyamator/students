import React from 'react';
import Movie from '../Movie';
import filter from '../Filters/filters';

function filterData(movies, filterType) {
  if (filterType === 'ASCENDING_POPULARITY') {
    return filter.byAscPopularity(movies);
  }

  if (filterType === 'ASCENDING_DATE') {
    return filter.byDescPopularity(movies);
  }

  if (filterType === 'DESCENDINGLY_DATE') {
    return filter.byAscDate(movies);
  }

  if (filterType === 'DESCENDINGLY_DATE') {
    return filter.byDescDate(movies);
  }

  return movies;
}

export default ({movies, visibleFilter}) => {
  const showedData = filterData(movies, visibleFilter);

  return (
    <section>
      {
        showedData.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))
      }
    </section>
  );
};

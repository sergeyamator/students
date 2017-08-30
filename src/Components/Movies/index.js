import React from 'react';
import Movie from '../Movie';
import filter from '../Filters/filters';
import PropTypes from 'prop-types';
import './styles.css';

function filterData(movies, filterType) {
  if (filterType === 'ASCENDING_POPULARITY') {
    return filter.byAscPopularity(movies);
  }

  if (filterType === 'DESCENDINGLY_POPULARITY') {
    return filter.byDescPopularity(movies);
  }

  if (filterType === 'ASCENDING_DATE') {
    return filter.byAscDate(movies);
  }

  if (filterType === 'DESCENDINGLY_DATE') {
    return filter.byDescDate(movies);
  }

  return movies;
}

const Movies = ({movies, visibleFilter}) => {
  const showedData = filterData(movies, visibleFilter);
  return (
    <section className='movies'>
      {
        showedData.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))
      }
    </section>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
  visibleFilter: PropTypes.string
};

export default Movies;

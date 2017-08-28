import React from 'react';
import Movie from '../Movie';

export default ({movies}) => (
  <section>
    {
      movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))
    }
  </section>
)




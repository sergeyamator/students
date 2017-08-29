import React from 'react';
import config from '../../config';

import { Link } from 'react-router-dom'

export default ({movie}) => {
  const data = mapDataForView(movie);

  return (
    <article className='movie'>
      <Link to={`/movie/${data.id}`}>
        <h2 className='movie__title'>{data.title}</h2>
        <div className='movie__picture'><img src={data.imgSrc} alt={data.title}/></div>
        <div className='movie__date'>{data.date}</div>
        <div className='movie__overview'>{data.overview}</div>
        <div className='movie__raiting'>
          <div className='movie__popularity'>{data.popularity}</div>
          <div className='movie__vote-count'>{data.voteCount}</div>
        </div>
      </Link>
    </article>
  );
};

function mapDataForView(data) {
  return {
    title: data.title || data.original_title || data.original_name || 'unknown',
    imgSrc: data.poster_path ? `${config.imageSrc}${data.poster_path}` : `${config.imageSrc}${data.backdrop_path}`,
    popularity: data.popularity,
    date: data.release_date || data.last_air_date || data.first_air_date,
    overview: data.overview,
    voteCount: data.vote_count,
    id: data.id
  };
}

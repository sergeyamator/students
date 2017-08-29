import React from 'react';
import config from '../../config';
import './styles.css';

import { Link } from 'react-router-dom';

export default ({movie}) => {
  const data = mapDataForView(movie);

  return (
    <article className='movie'>
      <Link to={`/movie/${data.id}`}>
        <h2 className='movie__title'>{data.title}</h2>
        <div className='movie__picture'><img src={data.imgSrc} alt={data.title}/></div>
        <div className='movie__date'><span className="movie__label">Год выпуска:</span> <b>{data.date}</b></div>
        <div className='movie__raiting'>
          <div className='movie__popularity'><span className="movie__label">Популярность</span> <b>{data.popularity}</b></div>
          <div className='movie__vote-count'><span className="movie__label">Количество голосов</span> <b>{data.voteCount}</b></div>
        </div>
        <div className='movie__overview'>{data.overview}</div>
      </Link>
    </article>
  );
};

function mapDataForView(data) {
  return {
    title: data.title || data.original_title || data.original_name || 'unknown',
    imgSrc: data.poster_path ? `${config.imageSrc}${data.poster_path}` : `${config.imageSrc}${data.backdrop_path}`,
    popularity: data.popularity,
    date: data.release_date || data.last_air_date || data.first_air_date || 0,
    overview: data.overview,
    voteCount: data.vote_count,
    id: data.id
  };
}

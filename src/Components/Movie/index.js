import React from 'react';
import config from '../../config';

export default ({movie, isSingleMovie}) => {

  const data = isSingleMovie ? mapDataForSingleView(movie) : mapDataForListView(movie);

  const view = isSingleMovie
    ? <article className='movie'>
      <a className='movie__link' href={data.homeUrl}>
        <h2 className='movie__title'>{data.title}</h2>
        <div className='movie__picture'><img src={data.imgSrc} alt={data.title}/></div>
        <div className='movie__date'>{data.date}</div>
        <div className='movie__overview'>{data.overview}</div>
        <div className='movie__episode-count'>{data.episodeCount}</div>
        <div className='movie__raiting'>
          <div className='movie__popularity'>{data.popularity}</div>
          <div className='movie__vote-count'>{data.voteCount}</div>
        </div>
        <ul className='movie__genres'>
          {
            data.genres.map(genre => <li key={genre.id}>{genre.name}</li>)
          }
        </ul>
      </a>
    </article>
    : <article className='movie'>
      <h2 className='movie__title'>{data.title}</h2>
      <div className='movie__picture'><img src={data.imgSrc} alt={data.title}/></div>
      <div className='movie__date'>{data.date}</div>
      <div className='movie__overview'>{data.overview}</div>
      <div className='movie__raiting'>
        <div className='movie__popularity'>{data.popularity}</div>
        <div className='movie__vote-count'>{data.voteCount}</div>
      </div>
    </article>

  return view;
};

function mapDataForListView(data) {
  return {
    title: data.title || data.original_title || data.original_name || 'unknown',
    imgSrc: data.poster_path ? `${config.imageSrc}${data.poster_path}` : `${config.imageSrc}${data.backdrop_path}`,
    popularity: data.popularity,
    date: data.release_date || data.last_air_date || data.first_air_date,
    overview: data.overview,
    voteCount: data.vote_count
  };
}

function mapDataForSingleView(data) {
  return {
    ...mapDataForListView(),
    title: data.title || data.original_title || data.name || data.original_name || 'unknown',
    episodeCount: data.episode_count,
    genres: data.genres,
    homeUrl: data.homepage,
  };
}

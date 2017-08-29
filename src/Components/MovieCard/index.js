import React, {Component} from 'react';
import config from '../../config';
import {movieActions} from '../../actions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    getMovies: id => {
      dispatch(movieActions.fetchMovie(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    state
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MovieCard extends Component {
  componentWillMount() {
    this.id = this.props.match.params.id;
    this.props.getMovies(this.id);
  }

  render() {
    if (!this.props.state.movie.currentMovie) {
      return null;
    }

    const data = mapDataForView(this.props.state.movie.currentMovie);

    return (
      <article className='movie'>
        <a href={data.homeUrl}>
          <h2 className='movie__title'>{data.title}</h2>
          <div className='movie__picture'><img src={data.imgSrc} alt={data.title}/></div>
          <div className='movie__date'>{data.date}</div>
          <div className='movie__overview'>{data.overview}</div>
          <div className='movie__raiting'>
            <div className='movie__popularity'>{data.popularity}</div>
            <div className='movie__vote-count'>{data.voteCount}</div>
          </div>
        </a>
      </article>
    );
  }
};

function mapDataForView(data) {
  return {
    title: data.title || data.original_title || data.name || data.original_name || 'unknown',
    episodeCount: data.episode_count,
    genres: data.genres,
    homeUrl: data.homepage,
    imgSrc: data.poster_path ? `${config.imageSrc}${data.poster_path}` : `${config.imageSrc}${data.backdrop_path}`,
    popularity: data.popularity,
    date: data.release_date || data.last_air_date || data.first_air_date,
    overview: data.overview,
    voteCount: data.vote_count,
    id: data.id
  };
}

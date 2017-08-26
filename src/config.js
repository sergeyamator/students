const apiKey = '3d34828e5c71c80272fde06fbd627191';

export default {
  searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=`,
  multiSearchUrl: `/search/multi?api_key=${apiKey}&query=`,
  baseMovieUrl: 'https://api.themoviedb.org/3',
  queryMovieById: 'tv/',
  apiKey: `?api_key=${apiKey}`,
  noImageSrc: 'http://babakunyho.eu/img/default-no-image.png',
  imageSrc: 'http://image.tmdb.org/t/p/w185'
};

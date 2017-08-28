import React from 'react';
import config from '../../config';

export default ({movie}) => {
  return (
    <article>
      <h2>{movie.title}</h2>
      <div><img src={config.imageSrc + movie.poster_path} alt={movie.title} /></div>
      <div>{movie.popularity}</div>
    </article>
  );
}

/*
 {
 "vote_average": 5.4,
 "vote_count": 189,
 "id": 378236,
 "video": false,
 "media_type": "movie",
 "title": "The Emoji Movie",
 "popularity": 14.209078,
 "poster_path": "/f5pF4OYzh4wb1dYL2ARQNdqUsEZ.jpg",
 "original_language": "en",
 "original_title": "The Emoji Movie",
 "genre_ids": [
 35,
 10751,
 16
 ],
 "backdrop_path": "/kTrgxhRSj2sun89bDbnGCPBiey6.jpg",
 "adult": false,
 "overview": "Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.",
 "release_date": "2017-07-28"
 }
 1{
 "vote_average": 6,
 "vote_count": 1340,
 "id": 4247,
 "video": false,
 "media_type": "movie",
 "title": "Scary Movie",
 "popularity": 4.470487,
 "poster_path": "/bvVmVFBVQLytK1H4TJTFdnhvf4T.jpg",
 "original_language": "en",
 "original_title": "Scary Movie",
 "genre_ids": [
 35
 ],
 "backdrop_path": "/s7dcAllZEVSrVIVMUVAUmwAxFmn.jpg",
 "adult": false,
 "overview": "Following on the heels of popular teen-scream horror movies, with uproarious comedy and biting satire. Marlon and Shawn Wayans, Shannon Elizabeth and Carmen Electra pitch in to skewer some of Hollywood's biggest blockbusters, including Scream, I Know What You Did Last Summer, The Matrix, American Pie and The Blair Witch Project.",
 "release_date": "2000-07-07"
 }
 2{
 "original_name": "Movie Surfers",
 "id": 2231,
 "media_type": "tv",
 "name": "Movie Surfers",
 "vote_count": 0,
 "vote_average": 0,
 "poster_path": null,
 "first_air_date": "1998-01-01",
 "popularity": 1.363993,
 "genre_ids": [
 10763
 ],
 "original_language": "en",
 "backdrop_path": null,
 "overview": "Movie Surfers is a Disney Channel mini-show, that appears in commercial-like form, where teenagers go behind the scenes of Walt Disney-related films. It started out as a TV special that would air when a new Disney movie came out. It was about teenagers communicating with each other via webcams and getting info about the movies. Now, it also appears as 5-minute segments after a Disney Channel movie or series ends.\n\nIn 1997 when the show began, Mischa, Lindsay, Alexis, and Marcus used the computer to surf the internet to go behind the scenes of upcoming movies. Starting in 2002, they began sitting in a screening room and talking to various actors and actresses of the movie and what inspired the movie. Since early 2005, there's been a brand new cast: Rose, who left early 2006 and was replaced by Stevanna, Josh, Jeryn, and Tessa. They still sit in a screening room but have branched out to do more interactive segments in which they might get to actually get in on some of the filming process themselves.\n\nIn 2009, Disney XD started airing Movie Surfers. sometimes during commercial breaks.",
 "origin_country": [
 "US"
 ]
 }
 */

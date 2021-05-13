import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.poster_path}/>
      <h2>{movie.title}</h2>
      <h4>{movie.release_date}</h4>
      <h4>{movie.average_rating}</h4>
    </div>
  )
}

export default MovieCard;

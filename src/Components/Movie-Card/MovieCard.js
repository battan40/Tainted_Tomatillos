import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie, handleClick }) => {
  const taintedRating = '⭐️'
  const taintedAverage = taintedRating.repeat(Math.floor(movie.average_rating))


  return (
    <NavLink id={movie.id} to={`/movieDetails/${movie.id}`} >
      <div onClick={() => handleClick(movie.id)} className='card'>
        <img className='movie-image' src={movie.poster_path} alt='movie poster'/>
        <h2 className='title'>{movie.title}</h2>
        <h4 className='movie-rating'>{taintedAverage}</h4>
      </div>
    </NavLink>

  )
}

export default MovieCard;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { taintedAverage } from '../../Utils/Utils';
import './MovieCard.css';

const MovieCard = ({ movie }) => {

  return (
    <NavLink id={movie.id} to={`/movieDetails/${movie.id}`} >
      <div className='card'>
        <img className='movie-image' src={movie.poster_path} alt={`${movie.title} poster`}/>
        <h2 className='title'>{movie.title}</h2>
        <h4 className='movie-rating'>{taintedAverage(movie.average_rating)}</h4>
      </div>
    </NavLink>
  )
}

export default MovieCard;

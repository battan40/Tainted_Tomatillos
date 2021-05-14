import React from 'react';
import './MovieCard.css'
import { ShowDetails } from '../Details/ShowDetails'

const MovieCard = ({ movie }) => {
  return (
    <button onclick={() => displayDetails(movie.id)}  className='card'>
      <img className='movie-image' src={movie.poster_path}/>
      <h2 className='title'>{movie.title}</h2>
      <h4 className='movie-release'>{movie.release_date}</h4>
      <h4 className='movie-rating'>{movie.average_rating}</h4>
    </button>
  )
}

export default MovieCard;

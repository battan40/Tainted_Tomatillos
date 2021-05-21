import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import { NavLink } from 'react-router-dom';

import './Movies.css';

const Movies = ({ movieData }) => {
  const movieDisplay = () => {
      return movieData.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        )
      })
  }

  return (
    <div className='movie-container'>
      {movieDisplay()}
    </div>
  )
}

export default Movies;

import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import { NavLink } from 'react-router-dom';

import './Movies.css';

const Movies = ({ movieData, movieSelected, handleClick }) => {
  const movieDisplay = () => {
      return movieData.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleClick={handleClick}
          />
        )
      })
  }

  return (
    <NavLink to={'/'}><div className='movie-container title movie-rating' >
      {movieDisplay()}
    </div></NavLink>
  )
}

export default Movies;

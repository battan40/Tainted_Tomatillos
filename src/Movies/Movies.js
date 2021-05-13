import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import './Movies.css'

const Movies = ({ movieData }) => {
  const movieDisplay = movieData.map(movie => {
      return (
        <div className='movies-container'>
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        </div>
    )
  })
  return movieDisplay
}
export default Movies;

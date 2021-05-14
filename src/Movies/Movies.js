import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import './Movies.css'

const Movies = ({ movieData }) => {

  const movieDisplay = movieData.map(movie => {
      return (
        <div>
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        </div>
    )
  })

  return (
    <div className='movie-container'>
      {movieDisplay}
    </div>
  )
  //the condition needs to render the container of the selected movie, and its specific details
  //
  // We need a movies container within a condition
}
export default Movies;

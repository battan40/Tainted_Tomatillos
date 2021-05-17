import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import ShowDetails from '../Details/ShowDetails';
import './Movies.css';

const Movies = ({ movieData, movieSelected, handleClick }) => {
  const movieDisplay = () => {
    if(movieSelected) {
      const selection = movieData.find(movie => movie.id === movieSelected)
        return (
          <ShowDetails
            movie={selection}
            handleClick={handleClick}
          />
        )
    } else {
      return movieData.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleClick={handleClick}
          />
        )
      })
  }}

  return (
    <div className='movie-container'>
      {movieDisplay()}
    </div>
  )
}

export default Movies;

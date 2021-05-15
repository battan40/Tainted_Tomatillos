import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import './Movies.css'
import ShowDetails from '../Details/ShowDetails'

const Movies = ({ movieData, movieSelected, handleClick }) => {

  const movieDisplay = () => {
    if(movieSelected) {
      const selection = movieData.find(movie => movie.id === movieSelected)
        return <ShowDetails
              movie={selection}
              handleClick={handleClick}
             />

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
  //the condition needs to render the container of the selected movie, and its specific details
  //
  // We need a movies container within a condition
}
export default Movies;

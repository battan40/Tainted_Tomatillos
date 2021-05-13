import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';

const Movies = ({ movieData }) => {
  return (
    <div className='movies'>
    <h1>It's a thang!</h1>
    {
      movieData.map(movie => {
        return <MovieCard key={movie.id} movie={movie}/>
      })
    }
    </div>
  )
}

export default Movies;

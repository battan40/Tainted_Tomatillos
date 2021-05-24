import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import './Movies.css';

const Movies = ({ movieData, searched }) => {
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
    {!searched &&
      {this.movieDisplay()}
    }
    {searched && movieData.length &&
      <h3>{'Sorry! No movies were found!'}</h3>
    }
    </div>
  )
}

export default Movies;

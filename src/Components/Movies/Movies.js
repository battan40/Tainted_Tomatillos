import React from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import './Movies.css';

const Movies = ({ movieData }) => {
  const movieDisplay = () => {
     if (!matchingMovies) {
      return movieData.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        )
      })
    } else {
      return matchingMovies.map(movie => {
        return (
          <MovieCard
          key={movie.id}
          movie={movie}
          handleClick={this.handleClick}
          />
        )
      })
    }
  }

  return (
    <div className='movie-container'>
      {movieDisplay()}
    </div>
  )
}

export default Movies;

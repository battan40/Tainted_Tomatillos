import React from 'react';
import movieData from './../movieData'
import './ShowDetails.css'

const ShowDetails = ({ movie, handleClick }) => {
  return (
    <div className='card'>
    <button onClick={() => handleClick(false)}>Home Page</button>
      <img className='release-date' src={movie.poster_path}/>
      <h2 className='title'>{movie.title}</h2>
      <h4 className='movie-release'>{movie.release_date}</h4>
      <h4 className='movie-rating'>{movie.average_rating}</h4>
      <h4 className='overview'>{movie.overview}</h4>
      <h4 className='genre'>{movie.genres}</h4>
      <h4 className='budget'>{movie.budget}</h4>
    <h4 className='revenue'>{movie.revenue}</h4>
      <h4 className='runtime'>{movie.runtime}</h4>
      <h4 className='tagline'>{movie.tagline}</h4>
    </div>
)}

export default ShowDetails;

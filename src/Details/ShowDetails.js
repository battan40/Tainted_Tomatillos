import React from 'react';
import movieData from './../movieData'



const ShowDetails = (id) => {
  return (
    <div className='card'>
      <img className='release-date' src={movie.poster_path}/>
      <h2 className='title'>{movie.title}</h2>
      <h4 className='movie-release'>{movie.release_date}</h4>
      <h4 className='movie-rating'>{movie.average_rating}</h4>
      <h4 className='overview'>{movie.overview}</h4>
      <h4 className='genre'>Dramady</h4>
      <h4 className='budget'>1 million thousand dollars</h4>
      <h4 className='revenue'>1 billion million dollars</h4>
      <h4 className='runtime'>1.75 hours</h4>
      <h4 className='tagline'>OMFG</h4>
    </div>
}

export default ShowDetails;

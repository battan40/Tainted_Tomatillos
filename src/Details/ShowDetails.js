import React, { Component } from 'react';
import './ShowDetails.css'
import { fetchSingleMovie } from '../utils/APICalls'

class ShowDetails extends Component {
  constructor({ movie }, props) {
    super();
      this.state = {
        movieID: movie.id,
        specificMovie: {},
        movieSelected: movie.id || false,
        error: ''
      }
  }

  render() {
    const { handleClick } = this.props;
    const { specificMovie } = this.state;
    const taintedRating = '⭐️';
    const accessDate = specificMovie.release_date ? specificMovie.release_date.split('-')[0] : '';
    const taglineConditional = specificMovie.tagline ? specificMovie.tagline : 'This movie doesn\'t have a tagline';
    // if(this.state.movie && !this.state.error) {
      return (
        <div className='details-card'>
         <button className='home-button' onClick={() => handleClick(false)}>Back to Home Page</button>
           <img className='details-image' src={specificMovie.poster_path} alt='movie poster'/>
           <h2 className='details-title'>{specificMovie.title}</h2>
           <h4 className='movie-release'>{accessDate}</h4>
           <h4 className='movie-rating'>{taintedRating.repeat(Math.floor(specificMovie.average_rating))}</h4>
           <h4 className='tagline'>{`'${taglineConditional}'`}</h4>
           <h4 className='overview'>Movie Overview:</h4>
           <h4 className='overview'>{specificMovie.overview}</h4>
           <h4 className='genre'>Genre: {specificMovie.genres}</h4>
           <h4 className='budget'>Budget: {specificMovie.budget}</h4>
           <h4 className='revenue'>Revenue: ${specificMovie.revenue}</h4>
           <h4 className='runtime'>RunTime: {specificMovie.runtime} min</h4>
        </div>
      )
    // }
    // else if (!this.state.movie && this.state.error) {
    //   <div className='details-card'>
    //   <button className='home-button' onClick={() => handleClick(false)}>Back to Home Page</button>
    //     <h1 className='title'>'Something went wrong! Please try again.'</h1>
    //   </div>
    // }
  }

  componentDidMount() {
    fetchSingleMovie(this.state.movieID)
      .then(singleMovieData => this.setState({ specificMovie: singleMovieData.movie }))
      .catch(error => this.setState({ error: this.handleSpecificErr(error.message) }))
  }

}

export default ShowDetails;

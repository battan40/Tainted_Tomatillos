import React, { Component } from 'react';
import { fetchSingleMovie } from '../../APICalls';
import { NavLink } from 'react-router-dom';
import './ShowDetails.css';

class ShowDetails extends Component {
  constructor(props) {
    super(props);
      this.state = {
        movieID: props.movie,
        specificMovie: {},
        error: ''
      }
  }

  render() {
    const { handleClick } = this.props;
    const { specificMovie } = this.state;
    const taintedRating = '⭐️';
    const taintedAverage = taintedRating.repeat(Math.floor(specificMovie.average_rating));
    const accessDate = specificMovie.release_date ? specificMovie.release_date.split('-')[0] : '';
    const taglineConditional = specificMovie.tagline ? specificMovie.tagline : 'Write in and give us a tagline for this one!';

        return (
          <div className='details-card'>
            <NavLink exact to='/'><button data-cy='home-button' className='home-button' onClick={() => handleClick(false)}>Back to Home Page</button></NavLink>
            {this.state.error && <h3>{this.state.error}</h3>}
            {!this.state.error &&
              <>
                <img className='details-image' src={specificMovie.poster_path} alt={`movie poster for ${specificMovie.title}`}/>
                <h2 data-cy='details-title' className='details-title'>{specificMovie.title}</h2>
                <h4 data-cy='movie-release' className='movie-release'>{accessDate}</h4>
                <h4 data-cy='movie-rating' className='movie-rating'>{taintedAverage}</h4>
                <h4 data-cy='tagline' className='tagline'>{`'${taglineConditional}'`}</h4>
                <h4 data-cy='overview-label' className='overview'>Movie Overview:</h4>
                <h4 data-cy='overview' className='overview'>{specificMovie.overview}</h4>
                <h4 data-cy='genre' className='genre'>Genre: {specificMovie.genres}</h4>
                <h4 data-cy='budget' className='budget'>Budget: ${specificMovie.budget}</h4>
                <h4 data-cy='revenue' className='revenue'>Revenue: ${specificMovie.revenue}</h4>
                <h4 data-cy='runtime' className='runtime'>RunTime: {specificMovie.runtime} min</h4>
              </>
            }
          </div>
        )
  }

  componentDidMount = () => {
    fetchSingleMovie(this.state.movieID)
      .then(singleMovieData => {
        if(typeof singleMovieData === 'string') {
          this.setState({ error: singleMovieData })
        } else {
          this.setState({ specificMovie: singleMovieData.movie })
        }
    })
      .catch(err => err.message)
  }
}

export default ShowDetails;

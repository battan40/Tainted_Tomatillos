import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies'
import ShowDetails from '../Details/ShowDetails'
import { fetchAllMovies } from '../utils/APICalls'

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: [],
        movieSelected: false,
        error: ''
      }
  }

  handleClick = (id) => {
    if(!this.state.movieSelected) {
      this.setState({
        movieSelected: id
      })
    } else {
      this.setState({
        movieSelected: false
      })
    }
  }

  render() {
    return (
      <article className='App'>
        <h1>Welcome To Tainted Tomatillos, Where The Ratings Are Honestly Rotten</h1>
        <Movies movieData={this.state.movies}
        movieSelected={this.state.movieSelected}
        handleClick={this.handleClick}/>
      </article>
    )
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movieData => this.setState({ movies: movieData.movies }))
      .catch(error => this.setState({ error: this.handleSpecificErr(error.message) }))
  }

  handleSpecificErr(err) {
    if (err >= 500) {
      return 'Something is wrong with our system. Please try again later!'
    } else {
      return 'Something went wrong! Please try again.'
    }
  }

}

export default App;

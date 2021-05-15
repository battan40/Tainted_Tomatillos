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
    this.setState({
      movieSelected: id
    })
  }

  render() {
    return (
      <article className="App">
        <h1>Welcome To Tainted Tomatillos, Where The Ratings Are Honestly Rotten</h1>
        <Movies movieSelected={this.state.movieSelected}
        movieData={this.state.movies}
        handleClick={this.handleClick}/>
      </article>
    )
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movieData => this.setState({ movies: movieData.movies }))
      .catch(error => this.setState({ error: this.handleSpecificErr(error.message) }))
  }


}

export default App;

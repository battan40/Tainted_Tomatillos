
import React, { Component } from 'react';
import './App.css';
import movieData from './../movieData'
import Movies from '../Movies/Movies'
import ShowDetails from '../Details/ShowDetails'


class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: movieData.movies,
        movieSelected: false,
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
        <Movies movieSelected={this.state.movieSelected}
        movieData={this.state.movies}
        handleClick={this.handleClick}/>
      </article>
      )

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { movieData } from './../movieData'


class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: { movieData } 
      }
  }

  displayAllMovies() {
    const [ newMovieData ] = movieData;
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      // <Movies movies={this.state.movies}
      </header>
      </div>
    );
  }

}

export default App;

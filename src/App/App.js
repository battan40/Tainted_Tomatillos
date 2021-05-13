
import React, { Component } from 'react';
import './App.css';
import movieData from './../movieData'
import Movies from '../Movies/Movies'

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: movieData.movies
      }
  }

  render() {
    return (
      <div className="App">
      <Movies movieData={this.state.movies}/>
      </div>
    );
  }

}

export default App;

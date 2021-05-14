
import React, { Component } from 'react';
import './App.css';
import movieData from './../movieData'
import Movies from '../Movies/Movies'
import ShowDetails from '../Details/ShowDetails'



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
      return (
        <article>
          
          <ShowDetails />
        </article>
      )
    );
  }
}

export default App;

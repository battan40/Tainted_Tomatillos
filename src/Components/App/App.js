import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import { fetchAllMovies } from '../../APICalls';
import { Route, Link } from 'react-router-dom';
import './App.css';

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
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.error &&
          <>
            <Route
              exact
              path="/"
              render={() => {
                return <Movies
                  movieData={this.state.movies}
                  movieSelected={this.state.movieSelected}
                  handleClick={this.handleClick}/>
              }}
            />
          </>
        }
      </article>
    )
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(movieData => {
        if(typeof movieData === 'string') {
          this.setState({ error: movieData })
        } else {
          this.setState({ movies: movieData })
        }
      })
      .catch(err => err.message)
  }
}

export default App;

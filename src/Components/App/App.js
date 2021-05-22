import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import ShowDetails from '../Details/ShowDetails';
import { fetchAllMovies } from '../../APICalls';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: [],
        filteredMovies: [],
        error: ''
    }
  }


  render() {
    return (
      <>
      <article className='App'>
        <Header moviesForSearchBar={this.moviesForSearchBar}/>
        {this.state.error && <h3 className='error-msg'>{this.state.error}</h3>}
        {!this.state.error &&
          <Switch>
            <Route exact path="/" render={() => {
                return <Movies
                  movieData={this.displayMovies()}
              />
              }}
            />
            <Route path="/movieDetails/:id" render={({ match }) => {
              const { id } = match.params;
              return <ShowDetails
                movie={id}
              />
              }}
            />
          </Switch>
        }
      </article>
      </>
    )
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(movieData => {
        (typeof movieData === 'string') ?
          this.setState({ error:
            movieData }):
              this.setState({ movies:
                movieData.movies })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
  }
}

export default App;

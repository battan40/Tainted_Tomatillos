import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import ShowDetails from '../Details/ShowDetails';
import { Route, Switch } from 'react-router-dom';
import { fetchAllMovies } from '../../Utils/APICalls';
import { cleanAllMoviesData } from '../../Utils/Utils';

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

  moviesForSearchBar = (searchValue) => {
    const moviesToList =  this.state.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState({filteredMovies: moviesToList})
  }

  displayMovies = () => {
    return this.state.filteredMovies.length > 0 ?
      this.state.filteredMovies :
      this.state.movies
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(movieData => {
        (typeof movieData === 'string') ?
          this.setState({ error:
            movieData }):
              this.setState({ movies:
                cleanAllMoviesData(movieData.movies) })

      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
  }

  render() {
    return (
      <>
      <article className='App'>
        <Header/>
        <SearchBar moviesForSearchBar={this.moviesForSearchBar} />
        {!this.props.filteredMovies.length &&

        }
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

}

export default App;

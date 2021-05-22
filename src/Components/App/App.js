import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import ShowDetails from '../Details/ShowDetails';
import { Route, Switch } from 'react-router-dom';
import { fetchAllMovies } from '../../Utils/APICalls';
import { cleanAllMoviesData } from '../../Utils/Utils'

import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: [],
<<<<<<< HEAD
        filteredMovies: [],
=======
        movieSelected: false,
        matchingMovies: null,
        isRendered: false,
        searchInput: '',
>>>>>>> 830dd7773d29f93f52d215dfe975394378b3a5f5
        error: ''
    }
  }

  moviesForSearchBar = (searchWord) => {
    const moviesToList =  this.state.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchWord.toLowerCase()))
    this.setState({filteredMovies: moviesToList})
  }

  displayMovies = () => {
    return this.state.filteredMovies.length > 0 ?
      this.state.filteredMovies :
      this.state.movies
  }

  render() {
    return (
      <>
      <article className='App'>
<<<<<<< HEAD
        <Header moviesForSearchBar={this.moviesForSearchBar}/>
        {this.state.error && <h3 className='error-msg'>{this.state.error}</h3>}
        {!this.state.error &&
          <Switch>
            <Route exact path="/" render={() => {
                return <Movies
                  movieData={this.displayMovies()}
              />
=======
        <Header />
        <form>
          <input
            className='search-input'
            type='text'
            placeholder="Search for a Movie"
            value={this.state.searchInput}
            onChange={(event) => this.handleChange(event)}
          />
        </form>
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.error && this.state.matchingMovies &&
            <Route exact path="/" render={() => {
                return <Movies
                  movieData={this.state.matchingMovies}
                  movieSelected={this.state.movieSelected}
                  handleClick={this.handleClick}
                  matchingMovies={this.matchingMovies}/>
              }}
            />
        }
        {!this.state.error && !this.state.matchingMovies &&
          <Switch>
            <Route exact path="/" render={() => {
                return <Movies
                  movieData={this.state.movies}
                  movieSelected={this.state.movieSelected}
                  handleClick={this.handleClick}
                  matchingMovies={this.matchingMovies}/>
>>>>>>> 830dd7773d29f93f52d215dfe975394378b3a5f5
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

  componentDidMount = async () => {
    await fetchAllMovies()
      .then(movieData => {
        (typeof movieData === 'string') ?
          this.setState({ error:
            movieData }):
              this.setState({ movies:
                cleanAllMoviesData(movieData.movies) })

      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
      console.log(this.state.movies)
  }

  handleChange = (event) => {
    event.preventDefault();
    let searchValue = (event.target.value).toUpperCase();
    let matches = this.filterMovies(searchValue);
    this.setState({ matchingMovies: matches });
    console.table(matches)

  }

  filterMovies = (searchValue) => {
    return this.state.movies.filter(movie => {
      let capTitle = movie.title.toUpperCase();
      return capTitle.includes(searchValue)
    })
  }

}

export default App;

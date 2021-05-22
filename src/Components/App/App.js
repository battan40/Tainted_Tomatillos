import React, { Component } from 'react';
import Header from '../Header/Header';
// import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import ShowDetails from '../Details/ShowDetails';
import { Route, Switch } from 'react-router-dom';
import { fetchAllMovies } from '../../APICalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: [],
        movieSelected: false,
        matchingMovies: null,
        isRendered: false,
        searchInput: '',
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
      <>
      <article className='App'>
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
              }}
            />
            <Route path="/movieDetails/:id" render={({ match }) => {
              const { id } = match.params;
              return <ShowDetails
                movie={id}
                handleClick={this.handleClick}
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
        if(typeof movieData === 'string') {
          this.setState({ error: movieData })
        } else {
          this.setState({ movies: movieData.movies })
        }
      })
      .catch(err => err.message)
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

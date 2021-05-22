import React, { Component } from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import { Route, NavLink } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends Component {
  constructor({ movieData, handleClick }) {
    super();
      this.state = {
        movies: movieData,
        matchingMovies: null,
        searchInput: '',
        error: ''
      }
  }

  handleChange = (event) => {
    event.preventDefault();
    let searchValue = (event.target.value).toUpperCase();
    this.setState({ searchInput: searchValue })
  }


  render () {
    return (
      <form>
        <input
          className='search-input'
          type='text'
          placeholder="Search for a Movie or Genre"
          value={this.state.searchInput}
          onChange={(event) => this.handleChange(event)}
        />
      </form>
    )
  }
}


export default SearchBar;

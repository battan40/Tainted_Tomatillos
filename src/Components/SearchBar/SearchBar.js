import React, { Component } from 'react';
import MovieCard from '../Movie-Card/MovieCard';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
      this.state = {
        searchInput: '',
        error: ''
      }
  }

  render () {
    return (
      <form>
        <input
          className='search-input'
          type='text'
          placeholder="Search for a Movie"
          value={this.state.searchInput}
          onChange={(event) => this.handleChange(event)}
        />
        <button className='search-button'>Search</button>
      </form>
    )
  }
}

export default SearchBar;

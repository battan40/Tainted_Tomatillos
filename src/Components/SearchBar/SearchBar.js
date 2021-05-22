import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchInput: '',
        error: ''
      }
  }

  handleChange = (event) => {
    let searchValue = (event.target.value).toUpperCase();
    this.setState({ searchInput: searchValue })
    this.props.moviesForSearchBar(this.state.searchInput)
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
        <button type='button' className='search-button'>Search</button>
      </form>
    )
  }
}


export default SearchBar;

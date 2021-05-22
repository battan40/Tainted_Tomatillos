import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ moviesForSearchBar }) => {
  return (
    <nav className='header'>
      <h1>Tainted Tomatillos</h1>
      <h2 className='small-title'>Where The Ratings Are Honestly Rotten</h2>
      <SearchBar />
    </nav>
  )
}

export default Header;

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='Header'>
      <h1>Tainted Tomatillos</h1>
      <h2 className='small-title'>Where The Ratings Are Honestly Rotten</h2>
      <button>Search</button>
      <input
        placeholder="Search for a Movie"
      />
    </nav>
  )
}

export default Header;

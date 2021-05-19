import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <Link to={'/'}><header className='App'>
      <h1>Tainted Tomatillos</h1>
      <h2 className='small-title'>Where The Ratings Are Honestly Rotten</h2>
      <button>Login</button>
      <input>Search for a Movie</input>
    </header></Link>
  )
}

export default Header;

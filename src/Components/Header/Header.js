import React, { Component } from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='testing'>
      <h1 >Tainted Tomatillos</h1>
      <h2 className='small-title'>Where The Ratings Are Honestly Rotten</h2>
      <button>Login</button>
      <input placeholder='Search for a Movie'/>
    </header>
  )
}

export default Header;

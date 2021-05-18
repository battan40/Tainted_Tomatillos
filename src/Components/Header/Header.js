import React, { Component } from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 >Tainted Tomatillos</h1>
      <h2 className='small-title'>Where The Ratings Are Honestly Rotten</h2>
      <button className='search-button' >Search</button>
      <input className='search-input' type='text' placeholder='Search for a Movie'/>
    </header>
  )
}

export default Header;

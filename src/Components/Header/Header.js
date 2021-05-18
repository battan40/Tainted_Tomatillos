import React, { Component } from 'react';
import './Header.css';

const Header = () => {
  render() {
    return (
      <header className='App'>
        <h1>Tainted Tomatillos</h1>
        <h2 className='small-title'>Where The Ratings Are Honestly Rotten</h2>
        <button>Login</button>
        <input>Search for a Movie</input>
      </header>
    )
  }
}

export default Movies;

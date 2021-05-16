import React, { Component } from 'react';
import './ShowDetails.css'
import { fetchSingleMovie } from '../utils/APICalls'

class ShowDetails extends Component {
  constructor({ movie }) {
    super();
      this.state = {
        movieID: movie.id,
        specificMovie: {},
        movieSelected: movie.id || false,
        error: ''
      }
  }


}

export default ShowDetails;

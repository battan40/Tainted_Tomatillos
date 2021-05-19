import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { baseURL, checkForErr, fetchAllMovies, fetchSingleMovie } from './APICalls';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

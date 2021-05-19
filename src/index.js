import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { baseURL, checkForErr, fetchAllMovies, fetchSingleMovie } from './APICalls';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));

reportWebVitals();

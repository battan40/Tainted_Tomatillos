export const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export const checkForErr = (response) => {
  if(!response) {
    throw new Error('Something went wrong! Please try again later.')
  } else {
    return response.json()
  }
}

export const fetchAllMovies = () => {
  return fetch(`${baseURL}/movies`)
  .then(checkForErr)
  .then(movieData => {
    return movieData
  })
}

export const fetchSingleMovie = () => {
  return fetch(`${baseURL}/movies/:movie_id`)
  .then(checkForErr)
  .then(singleMovieData => {
    return singleMovieData
  })
}

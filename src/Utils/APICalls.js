export const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export const checkForErr = (response) => {
  if(response.status >= 500) {
    return 'Uhoh! Something is wrong with our system. Please try back later.'
  } else if (!response.ok) {
    return 'Something went wrong. Please try again later.'
  } else {
    return response.json()
  }
}

export const fetchAllMovies = () => {
  return fetch(`${baseURL}/movies`)
  .then(checkForErr)
}

export const fetchSingleMovie = (id) => {
  return fetch(`${baseURL}/movies/${id}`)
  .then(checkForErr)
  .then(singleMovieData => {
    return singleMovieData
  })
}

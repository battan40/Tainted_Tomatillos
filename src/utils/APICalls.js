export const checkForErr = (response) => {
  if(!response) {
    throw new Error('Something went wrong! Please try again later.')
  } else {
    return response.json()
  }
}

export const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export const fetchAllMovies = (`${baseURL}/movies`) => {

}

export const fetchSingleMovie = () => {

}

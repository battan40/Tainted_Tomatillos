export const taintedAverage = (movieRating) => {
  const taintedRating = '⭐️'
  return taintedRating.repeat(Math.floor(movieRating))
}

export const cleanAllMoviesData = (allMovies) => {
  return allMovies.map(movie => {
    return {
      "id": movie.id,
      "poster_path": movie.poster_path,
      "title": movie.title,
      "average_rating": movie.average_rating
    }
  })
}

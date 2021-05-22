export const taintedAverage = (movieRating) => {
  const taintedRating = '⭐️'
  return taintedRating.repeat(Math.floor(movieRating))
}

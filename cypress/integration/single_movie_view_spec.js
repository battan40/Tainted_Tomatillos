describe('Show single movie view of Tainted Tomatillos App', () => {

  beforeEach(() => {
    cy.fixture('singleMovieMockData.json')
      .then(mockData => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000/movieDetails/337401')
  });

  it('Should be able to visit a single movie details page', () => {
    cy.url().should('eq', 'http://localhost:3000/movieDetails/337401')
  });

})

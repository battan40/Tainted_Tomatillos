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

  it('Should display the title, subtitle, button, and input of the page upon loading', () => {
    cy.contains('nav>h1', 'Tainted Tomatillos')
      .get('nav .small-title').should('contain', 'Where The Ratings Are Honestly Rotten')
      .get('nav').find('button').should('be.visible')
      .get('nav input[type=text]').should('be.visible')
  });

  it('Should only display one movies on the details page', () => {
    cy.get('article').find('.details-card').should('have.length', 1)
  });

  it('Should show a movie poster image on the movie details card', () => {
    cy.get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
  });

  it('Should possess an alt description for the screen reader or broken image', () => {
    cy.get('img').should('have.attr', 'alt');
  });

  it('Should display a title on the movie details card', () => {
    cy.get('[data-cy=details-title]').should('contain', 'Mulan');
  });

  it('Should display a title on the movie details card', () => {
    cy.get('[data-cy=movie-release]').should('contain', '2020');
  });

  it('Should display a title on the movie details card', () => {
    cy.get('[data-cy=movie-rating]').contains('⭐️');
  });

})

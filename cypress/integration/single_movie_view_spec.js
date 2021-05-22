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

  it('Should display a movie release year on the movie details card', () => {
    cy.get('[data-cy=movie-release]').should('contain', '2020');
  });

  it('Should display a movie rating on the movie details card', () => {
    cy.get('[data-cy=movie-rating]').should('contain', '⭐️⭐️⭐️⭐️⭐️');
  });

  it('Should display a tagline on the movie details card', () => {
    cy.get('[data-cy=tagline]').should('contain', 'Write in and give us a tagline for this one!');
  });

  it('Should display an overview on the movie details card', () => {
    cy.get('[data-cy=overview-label]').should('contain', 'Movie Overview:');
  });

  it('Should display an overview on the movie details card', () => {
    cy.get('[data-cy=overview]').should('contain', 'When the Emperor of China');
  });

  it('Should display a genre on the movie details card', () => {
    cy.get('[data-cy=genre]').should('contain', 'Action | Adventure | Drama | Fantasy');
  });

  it('Should display a budget on the movie details card', () => {
    cy.get('[data-cy=budget]').should('contain', '$200000000');
  });

  it('Should display a revenue on the movie details card', () => {
    cy.get('[data-cy=revenue]').should('contain', '$57000000');
  });

  it('Should display a runtime on the movie details card', () => {
    cy.get('[data-cy=runtime]').should('contain', '115 min');
  });

  it('Should display a home button on the movie details card', () => {
    cy.get('[data-cy=home-button]').should('contain', 'Back to Home Page');
  });

  it('Should return to home page when back to home button is clicked', () => {
    cy.get('[data-cy=home-button]').click()
      .url().should('eq', 'http://localhost:3000/');
  });

});

describe('400 error handling message on the main page view', () => {
  it('Displays a different message when a 404 error comes through to the user', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      statusCode: 404,
      delay: 200
    })
    cy.visit('http://localhost:3000/movieDetails/337401')
      .get('h3').should('contain', 'Something went wrong. Please try again later.')
  });
});

describe('500 Error handle for main page view', () => {
  it('Displays a 500 error message when the server is down', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      statusCode: 500,
      delay: 200
    })
    cy.visit('http://localhost:3000/movieDetails/337401')
      .get('h3').should('contain', 'Uhoh! Something is wrong with our system. Please try back later.')
  });
});

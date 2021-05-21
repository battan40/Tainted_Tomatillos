describe('Show main view of Tainted Tomatillos App', () => {

  beforeEach(() => {
    cy.fixture('stubbingMockData.json')
      .then(mockData => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display the title, subtitle, button, and input of the page upon loading', () => {
    cy.contains('nav>h1', 'Tainted Tomatillos')
      .get('nav .small-title').should('contain', 'Where')
      .get('nav').find('button').should('be.visible')
      .get('nav input[type=text]').should('be.visible')
  });

  it('Should display all movies on the main page', () => {
    cy.get('article').find('.card').should('have.length', 5)
  });

  it('Should show a movie poster image with each film display', () => {
    cy.get('#694919')
      .get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });

  it('Should possess an alt description for the screen reader or broken image', () => {
    cy.get('#694919')
      .get('img').should('have.attr', 'alt');
  });

  it('Should display a title with each movie image', () => {
    cy.get('#337401').find('.title').should('be.visible')
  });

  it('Should display a rating as star emojis for each movie on the main page', () => {
    cy.get('#337401').find('.movie-rating').contains('⭐️')
  });

  it('Every movie display should be a clickable card', () => {
    cy.get('article').click()
  });

  it('Should go to a display of an individual movie, upon click of anywhere on the movie card', () => {
    cy.get('#337401').click()
        .url().should('include', '/337401')
        .get('.details-card')
    })

  });


  describe('400s error handling message on the main page view', () => {
    it('Displays a different message when a 404 error comes through to the user', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404,
        delay: 200
      })
      cy.visit('http://localhost:3000')
        .get('h3').should('contain', 'Something went wrong. Please try again later.')
    });
  });

  describe('500 Error handle for main page view', () => {
    it('Displays a 500 error message when the server is down', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500,
        delay: 200
      })
      cy.visit('http://localhost:3000')
        .get('h3').should('contain', 'Uhoh! Something is wrong with our system. Please try back later.')
    });
  });

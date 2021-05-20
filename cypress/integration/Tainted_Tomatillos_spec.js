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
    cy.contains('header>h1', 'Tainted Tomatillos')
      .get('header .small-title').should('contain', 'Where')
      .get('header').find('button').should('be.visible')
      .get('header input[type=text]').should('be.visible')
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

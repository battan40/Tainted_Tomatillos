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

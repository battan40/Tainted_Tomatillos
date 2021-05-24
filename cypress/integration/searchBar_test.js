describe('The search bar functionality', () => {

  beforeEach(() => {
    cy.fixture('stubbingMockData.json')
      .then(mockData => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000/')
  });



})

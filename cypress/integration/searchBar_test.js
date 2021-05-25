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

  it('Should display the search bar on the main page', () => {
    cy.get('form').find('input').should('be.visible')
  });

  it('Should be able to type text in search bar', () => {
    cy.get('form').find('input').type('Mulan')
  });

  it('Should not display any movies if no matching input is found', () => {
    cy.get('form').find('input').type('THE GRINCH')
      .get('article').find('.card').should('have.length', 0)
  });

})

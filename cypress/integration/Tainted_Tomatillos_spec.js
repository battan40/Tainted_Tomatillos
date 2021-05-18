describe('Show main view of Tainted Tomatillos App', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000')
  })

  it('should be able to visit the page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

})

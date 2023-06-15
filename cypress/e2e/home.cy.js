describe('Home', () => {
  it('devrait contenir des liens cliquables', () => {
    cy.visit('/')
    cy.contains('Users')
    cy.contains('Counter')
    cy.contains('Rôles')
    cy.contains('Inscrivez-vous').click()
    cy.url().should('eq', Cypress.config().baseUrl + 'register')
  })
})
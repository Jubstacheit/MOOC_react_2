describe('Logout', () => {
  it('se déconnecter après une connexion ', () => {
    cy.visit('/')
    cy.visit('/login')
    cy.get('#login').type('Viviane')
    cy.get('#password').type('PASSWORD')
    cy.get('button[type=submit]').click()
    cy.url().should('eq', Cypress.config().baseUrl)
    cy.contains('Déconnexion')
    cy.get('#disconnect[type=submit]').click()
    cy.url().should('eq', Cypress.config().baseUrl)
    cy.contains('Déconnexion').should('not.exist')
  })
})
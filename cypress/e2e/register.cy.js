describe('Inscription', () => {
    it('devrait afficher une erreur si le nom est trop court ou trop grand', () => {
        cy.visit('/register')
        cy.get('#name').type('a')
        cy.get('button[type=submit]').click()
        cy.get('div.alert.alert-warning').should('have.text', 'Votre nom doit contenir au moins 2 caractères')
        cy.url().should('eq', Cypress.config().baseUrl + 'register')

        cy.visit('/register')
        cy.get('#name').type('TestTestTestTestTestTestTestTestTestTestTestTestTestTestTest')
        cy.get('button[type=submit]').click()
        cy.get('div.alert.alert-warning').should('have.text', 'Votre nom doit contenir moins de 50 caractères')
        cy.url().should('eq', Cypress.config().baseUrl + 'register')
    })

    it(`devrait afficher une erreur si l'email est invalide`, () => {
        cy.visit('/register')
        cy.get('#name').type('TestName')
        cy.get('#email').type('test')
        cy.get('button[type=submit]').click()
        cy.get('div.alert.alert-warning').should('have.text', 'Adresse email invalide')
        cy.url().should('eq', Cypress.config().baseUrl + 'register')
    })

    it(`devrait afficher une erreur si le mot de passe est trop court`, () => {
        cy.visit('/register')
        cy.get('#name').type('TestName')
        cy.get('#email').type('test@test.com')
        cy.get('#password').type('Test')
        cy.get('button[type=submit]').click()
        cy.get('div.alert.alert-warning').should('have.text', 'Votre mot de passe doit contenir au moins 8 caractères')
        cy.url().should('eq', Cypress.config().baseUrl + 'register')
    })

    it('devrait afficher une erreur si le pays n\'est pas sélectionné', () => {
        cy.visit('/register')
        cy.get('#name').type('TestName')
        cy.get('#email').type('test@test.com')
        cy.get('#password').type('TestPassword')
        cy.get('#country').select('')
        cy.get('button[type=submit]').click()
        cy.get('div.alert.alert-warning').should('have.text', 'Un pays est nécéssaire')
        cy.url().should('eq', Cypress.config().baseUrl + 'register')
    })

    it('devrait rediriger vers le home lorsque le formulaire est rempli', () => {
        cy.visit('/register')
        cy.get('#name').type('TestName')
        cy.get('#email').type('test@test.com')
        cy.get('#password').type('TestPassword')
        cy.get('#country').select('FRANCE')
        cy.get('button[type=submit]').click()
        cy.url().should('eq', Cypress.config().baseUrl)
    })
  })
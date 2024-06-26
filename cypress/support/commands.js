// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginAsStandartUser', () => 
{ 
        cy.visit('/')
        cy.get('#user-name').type(Cypress.env('userNameStandart'))
        cy.get('#password').type(Cypress.env('passwordStandart'))
        cy.get('#login-button').click()
        cy.url().should('include', "https://www.saucedemo.com/inventory.html") 
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
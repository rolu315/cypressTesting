/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        login(): Chainable<void>;
    }
}

Cypress.Commands.add('login', () => {
    const loginCredentials = Cypress.env('login');
    const email = loginCredentials.email;
    const password = loginCredentials.password;
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('button[id="submit"]').click();
});


/// <reference types="cypress" />

export { };

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<any>;
            createGraphQlAlias(operationName: string, alias: string): Chainable<any>;
            createRestIntercept(method: string, url: string, alias: string): Chainable<any>;
        }
    }
}
Cypress.Commands.add('login', (email, password) => {
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('button[id="submit"]').click();
});

Cypress.Commands.add('createGraphQlAlias', (operationName, alias) => {
    cy.intercept('POST', '/graphql', (req) => {
        if (req.body.operationName === operationName) {
            req.alias = alias;
        }
    });
});
import { HttpMethod } from '../utilities/enums/httpMethods';
Cypress.Commands.add('createRestIntercept', (method, url, alias) => {
    if (!Object.values(HttpMethod).includes(method)) {
        throw new Error(`Invalid HTTP method: ${method}. Allowed methods are: ${Object.keys(HttpMethod).join(', ')}`);
    }
    cy.intercept(method, url).as(alias);
});
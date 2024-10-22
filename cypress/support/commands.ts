/// <reference types="cypress" />
import { loginPage } from '../pageObjects/login.po';
import { HttpMethod } from '../utilities/enums/httpMethods';

//adding the export here turns this from a script page to a module page
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
    loginPage.login(email, password);
});

Cypress.Commands.add('createGraphQlAlias', (operationName, alias) => {
    cy.intercept('POST', '/graphql', (req) => {
        if (req.body.operationName === operationName) {
            req.alias = alias;
        }
    });
});


Cypress.Commands.add('createRestIntercept', (method, url, alias) => {
    if (!Object.values(HttpMethod).includes(method)) {
        throw new Error(`Invalid HTTP method: ${method}. Allowed methods are: ${Object.keys(HttpMethod).join(', ')}`);
    }
    cy.intercept(method, url).as(alias);
});
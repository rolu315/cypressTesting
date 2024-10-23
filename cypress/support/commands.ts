/// <reference types="cypress" />
import { loginPage } from '../pageObjects/login.po';
import { HttpMethod } from '../utilities/enums/httpMethods';
import { faker } from '@faker-js/faker';

//adding the export here turns this from a script page to a module page
export { };

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<any>;
            createGraphQlAlias(operationName: string, alias: string): Chainable<any>;
            createRestIntercept(method: string, url: string, alias: string): Chainable<any>;
            generateContactData(): Chainable<any>;
            createUser(): Chainable<any>;
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



Cypress.Commands.add('generateContactData', () => {
    const contact = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ provider: 'tester.com' }).toLocaleLowerCase(),
        phoneNumber: faker.phone.number({ style: 'national' }),
        birthdate: faker.date.birthdate({ mode: 'age', min: 18, max: 65 }).toISOString().split('T')[0],
        streetAddress1: faker.location.streetAddress(),
        streetAddress2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        postalCode: faker.location.zipCode(),
        country: faker.location.country()
    };
    cy.wrap(contact);
});

Cypress.Commands.add('createUser', () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ provider: 'tester.com' }).toLocaleLowerCase(),
        password: faker.internet.password()
    };
    cy.wrap(newUser);
});
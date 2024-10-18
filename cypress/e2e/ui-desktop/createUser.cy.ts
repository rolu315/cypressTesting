import { generateRandomUser } from '../../utilities/utilities';

describe('Create New User', () => {
    it('should create a new user', () => {
        const user = generateRandomUser();
        cy.get('button[id="signup"]').click();
        cy.url().should('include', '/addUser');
        cy.get('input[id="firstName"]').type(user.firstName);
        cy.get('input[id="lastName"]').type(user.lastName);
        cy.get('input[id="email"]').type(user.email);
        cy.get('input[id="password"]').type(user.password);
        cy.get('button[id="submit"]').click();
        cy.url().should('include', '/contactList');
    });
    it('should not create a new user with an existing email', () => {
        const user = generateRandomUser();
        cy.get('button[id="signup"]').click();
        cy.url().should('include', '/addUser');
        cy.get('input[id="firstName"]').type(user.firstName);
        cy.get('input[id="lastName"]').type(user.lastName);
        cy.get('input[id="email"]').type(user.email);
        cy.get('input[id="password"]').type(user.password);
        cy.get('button[id="submit"]').click();
        cy.url().should('include', '/addUser');
    });
    it('newly created user should be able to login', () => {
        const user = generateRandomUser();
        cy.get('button[id="signup"]').click();
        cy.url().should('include', '/addUser');
        cy.get('input[id="firstName"]').type(user.firstName);
        cy.get('input[id="lastName"]').type(user.lastName);
        cy.get('input[id="email"]').type(user.email);
        cy.get('input[id="password"]').type(user.password);
        cy.get('button[id="submit"]').click();
        cy.url().should('include', '/contactList');
        cy.get('button[id="logout"]').click();
        cy.url().should('include', '/');
        cy.login(user.email, user.password);
        cy.url().should('include', '/contactList');
    });
});
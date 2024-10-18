describe('Login', () => {
    it('should login with valid credentials', () => {
        const loginCredentials = Cypress.env('login');
        const email = loginCredentials.email;
        const password = loginCredentials.password;
        cy.login(email, password);
        cy.url().should('include', '/contactList');
    });
});
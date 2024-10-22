describe('Login', () => {
    it('should login with valid credentials', () => {
        // using an .env file to store real login data is a good practice compared to putting this in fixtures. Either works, but .env is more secure with real login data. 
        const loginCredentials = Cypress.env('login');
        const email = loginCredentials.email;
        const password = loginCredentials.password;
        cy.login(email, password);
        cy.url().should('include', '/contactList');
    });
});
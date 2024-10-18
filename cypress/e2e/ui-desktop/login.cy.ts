describe('Login', () => {
    it('should login with valid credentials', () => {
        cy.login();
        cy.url().should('include', '/contactList');
    });
});
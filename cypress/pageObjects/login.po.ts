class LoginPage {
    login(email: string, password: string) {
        cy.get('input[id="email"]').type(email);
        cy.get('input[id="password"]').type(password);
        cy.get('button[id="submit"]').click();
    }

    validateLoginUrl() {
        cy.url().should('include', '/');
    }
}
export const loginPage = new LoginPage();

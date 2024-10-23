class LoginPage {
    login(email: string, password: string) {
        cy.get('input[id="email"]').type(email);
        cy.get('input[id="password"]').type(password);
        cy.get('button[id="submit"]').click();
    }

    existingUserLogin() {
        const loginCredentials = Cypress.env('login');
        const email = loginCredentials.email;
        const password = loginCredentials.password;
        cy.login(email, password);
        cy.url().should('include', '/contactList');
    }

    validateLoginUrl() {
        cy.url().should('include', '/');
    }
}
export const loginPage = new LoginPage();

class SignupPage {
    visit() {
        cy.get('button[id="signup"]').click();
        cy.url().should('include', '/addUser');
    }

    enterFirstName(firstName: string) {
        cy.get('input[id="firstName"]').type(firstName);
    }

    enterLastName(lastName: string) {
        cy.get('input[id="lastName"]').type(lastName);
    }

    enterEmail(email: string) {
        cy.get('input[id="email"]').type(email);
    }

    enterPassword(password: string) {
        cy.get('input[id="password"]').type(password);
    }

    submit() {
        cy.get('button[id="submit"]').click();
    }

    validateSignupPageUrl() {
        cy.url().should('include', '/addUser');
    }
}
export const signupPage = new SignupPage();

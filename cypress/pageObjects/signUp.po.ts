class SignupPage {
    visit() {
        cy.get('button[id="signup"]').click();
        cy.url().should('include', '/addUser');
        return this;
    }

    enterFirstName(firstName: string) {
        cy.get('input[id="firstName"]').type(firstName);
        return this;
    }

    enterLastName(lastName: string) {
        cy.get('input[id="lastName"]').type(lastName);
        return this;
    }

    enterEmail(email: string) {
        cy.get('input[id="email"]').type(email);
        return this;
    }

    enterPassword(password: string) {
        cy.get('input[id="password"]').type(password);
        return this;
    }

    submit() {
        cy.get('button[id="submit"]').click();
    }

    cancel() {
        cy.get('button[id="cancel"]').click();
    }

    validateSignupPageUrl() {
        cy.url().should('include', '/addUser');
    }

    signUpNewUser(signUpData: any) {
        this.enterFirstName(signUpData.firstName)
            .enterLastName(signUpData.lastName)
            .enterEmail(signUpData.email)
            .enterPassword(signUpData.password);
        return this;
    }

    isEmailErrorMessageDisplayed() {
        cy.get('#error').should('be.visible');
        cy.get('#error').should('have.text', 'Email address is already in use');
    }
}

export const signupPage = new SignupPage();

import { contactListPage } from '../../pageObjects/contactList.po';
import { loginPage } from '../../pageObjects/login.po';
import { signupPage } from '../../pageObjects/signUp.po';

beforeEach(() => {
    signupPage.visit();
});

describe('Create New User', () => {
    it('should create a new user', () => {
        cy.createUser().then((signUpData) => {
            signupPage.signUpNewUser(signUpData).submit();
            contactListPage.validateContactListUrl();
        });
    });

    it('should not create a new user with an existing email', () => {
        cy.createUser().then((signUpUser1) => {
            signupPage.signUpNewUser(signUpUser1).submit();
            contactListPage.validateContactListUrl();
            cy.wrap(signUpUser1.email).as('signUpUser1');
            contactListPage.logout();
        });
        signupPage.visit();
        cy.createUser().then((signUpUser2) => {
            cy.get('@signUpUser1').then((signUpUser1) => {
                signupPage.enterFirstName(signUpUser2.firstName);
                signupPage.enterLastName(signUpUser2.lastName);
                signupPage.enterEmail(signUpUser1.toString());
                signupPage.enterPassword(signUpUser2.password);
                signupPage.submit();
                signupPage.isEmailErrorMessageDisplayed();
            });
        });
    });
    
    it('newly created user should be able to login', () => {
        cy.createUser().then((signUpUser) => {
            signupPage.signUpNewUser(signUpUser).submit();
            contactListPage.validateContactListUrl();
            contactListPage.logout();
            loginPage.validateLoginUrl();
            loginPage.login(signUpUser.email, signUpUser.password);
            contactListPage.validateContactListUrl();
        });
    });
});


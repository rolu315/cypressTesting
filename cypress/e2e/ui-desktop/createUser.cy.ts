import { contactListPage } from '../../pageObjects/contactList.po';
import { loginPage } from '../../pageObjects/login.po';
import { signupPage } from '../../pageObjects/signUp.po';
import { generateRandomUser } from '../../utilities/utilities';

describe('Create New User', () => {
    it('should create a new user', () => {
        const user = generateRandomUser();
        signupPage.visit();
        signupPage.enterFirstName(user.firstName);
        signupPage.enterLastName(user.lastName);
        signupPage.enterEmail(user.email);
        signupPage.enterPassword(user.password);
        signupPage.submit();
        contactListPage.validateContactListUrl();
    });

    it('should not create a new user with an existing email', () => {
        const user = generateRandomUser();
        signupPage.visit();
        signupPage.enterFirstName(user.firstName);
        signupPage.enterLastName(user.lastName);
        signupPage.enterEmail(user.email);
        signupPage.enterPassword(user.password);
        signupPage.submit();
        signupPage.validateSignupPageUrl();
    });

    it('newly created user should be able to login', () => {
        const user = generateRandomUser();
        signupPage.visit();
        signupPage.enterFirstName(user.firstName);
        signupPage.enterLastName(user.lastName);
        signupPage.enterEmail(user.email);
        signupPage.enterPassword(user.password);
        signupPage.submit();
        contactListPage.validateContactListUrl();
        contactListPage.logout();
        loginPage.validateLoginUrl();
        loginPage.login(user.email, user.password);
        contactListPage.validateContactListUrl();
    });
});

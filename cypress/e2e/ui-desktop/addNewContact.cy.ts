import { addContact } from "../../pageObjects/addContact.po";
import { contactListPage } from "../../pageObjects/contactList.po";
import { loginPage } from "../../pageObjects/login.po";

beforeEach(() => {
    loginPage.existingUserLogin();
});

describe('Add New Contact', function () {
    it('should add a new contact', () => {
        cy.generateContactData().then((contactData) => {
            cy.url().should('include', '/contactList');
            contactListPage.addContact();
            cy.url().should('include', '/addContact');
            addContact.enterAllContactData(contactData)
                .submit();
            cy.url().should('include', '/contactList');
            addContact.assertContactInList(contactData);
        });
    });
});

import { addContact } from "../../pageObjects/addContact.po";
import { contactDetails } from "../../pageObjects/contactDetails.po";
import { contactListPage } from "../../pageObjects/contactList.po";
import { loginPage } from "../../pageObjects/login.po";

beforeEach(() => {
  loginPage.existingUserLogin();
});

describe('Contacts can be deleted', function () {
  it('should delete a new contact', function () {
    cy.url().should('include', '/contactList');
    
    cy.generateContactData().then((contactData) => {
      contactListPage.addContact();
      addContact.enterAllContactData(contactData).submit();

      cy.get('.contacts')
        .contains('td', `${contactData.firstName} ${contactData.lastName}`)
        .parent()
        .within(() => {
          cy.get('td').eq(1).click();
        });

      cy.url().should('include', '/contactDetails');
      contactDetails.getContactFirstName().should('contain', contactData.firstName);
      contactDetails.getContactLastName().should('contain', contactData.lastName);

      contactDetails.getDeleteContactButton().click();
      cy.handleConfirmDialog('Are you sure you want to delete this contact?', true);

      cy.url().should('include', '/contactList');
      cy.get('.contacts')
        .contains('td', `${contactData.firstName} ${contactData.lastName}`)
        .should('not.exist');
    });
  });
});


class ContactDetails {
  getEditContactButton() {
    return cy.get('button').contains('Edit Contact'); 
  }

  getDeleteContactButton() {
    return cy.get('button').contains('Delete Contact');
  }

  getReturnToContactListButton() {
    return cy.get('button').contains('Return to Contact List');
  }

  getContactFirstName() {
    return cy.get('#firstName');
  }
  getContactLastName() {
    return cy.get('#lastName');
  }

  getContactDateOfBirth() {
    return cy.get('#birthdate');
  }

  getContactEmail() {
    return cy.get('#email');
  }

  getContactPhoneNumber() {
    return cy.get('#phone');
  }

  getContactStreetAddress1() {
    return cy.get('#street1');
  }

  getContactStreetAddress2() {
    return cy.get('#street2');
  }

  getContactCity() {
    return cy.get('#city');
  }

  getContactState() {
    return cy.get('#stateProvince');
  }

  getContactPostalCode() {
    return cy.get('#postalCode');
  }

  getContactCountry() {
    return cy.get('#country');
  }
}

export const contactDetails = new ContactDetails();

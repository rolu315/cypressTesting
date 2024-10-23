class ContactListPage {
    validateContactListUrl() {
        cy.url().should('include', '/contactList');
    }

    addContact() {
        cy.get('button[id="add-contact"]').click();
    }

    logout() {
        cy.get('button[id="logout"]').click();
    }
}
export const contactListPage = new ContactListPage();

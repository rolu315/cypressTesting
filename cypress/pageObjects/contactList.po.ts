class ContactListPage {
    validateContactListUrl() {
        cy.url().should('include', '/contactList');
    }

    logout() {
        cy.get('button[id="logout"]').click();
    }
}
export const contactListPage = new ContactListPage();

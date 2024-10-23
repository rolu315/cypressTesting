class AddContact {
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

    enterPhoneNumber(phoneNumber: string) {
        cy.get('input[id="phone"]').type(phoneNumber);
        return this;
    }

    enterDateOfBirth(dateOfBirth: string) {
        cy.get('input[id="birthdate"]').type(dateOfBirth);
        return this;
    }

    enterStreetAddress1(address: string) {
        cy.get('input[id="street1"]').type(address);
        return this;
    }

    enterStreetAddress2(address: string) {
        cy.get('input[id="street2"]').type(address);
        return this;
    }

    enterCity(city: string) {
        cy.get('input[id="city"]').type(city);
        return this;
    }

    enterState(state: string) {
        cy.get('input[id="stateProvince"]').type(state);
        return this;
    }

    enterPostalCode(postalCode: string) {
        cy.get('input[id="postalCode"]').type(postalCode);
        return this;
    }

    enterCountry(country: string) {
        cy.get('input[id="country"]').type(country);
        return this;
    }

    submit() {
        cy.get('button[id="submit"]').click();
    }

    cancel() {
        cy.get('button[id="cancel"]').click();
    }

    enterAllContactData(contactData: any) {
        this.enterFirstName(contactData.firstName)
            .enterLastName(contactData.lastName)
            .enterDateOfBirth(contactData.birthdate)
            .enterEmail(contactData.email)
            .enterPhoneNumber(contactData.phoneNumber)
            .enterStreetAddress1(contactData.streetAddress1)
            .enterStreetAddress2(contactData.streetAddress2)
            .enterCity(contactData.city)
            .enterState(contactData.state)
            .enterPostalCode(contactData.postalCode)
            .enterCountry(contactData.country);
        return this;
    }

    assertContactInList = (contactData) => {
        cy.get('.contacts').contains('td', contactData.firstName + ' ' + contactData.lastName).parent().within(() => {
            cy.get('td').eq(1).should('have.text', contactData.firstName + ' ' + contactData.lastName);
            cy.get('td').eq(2).should('have.text', contactData.birthdate);
            cy.get('td').eq(3).should('have.text', contactData.email);
            cy.get('td').eq(4).should('have.text', contactData.phoneNumber);
            cy.get('td').eq(5).should('have.text', contactData.streetAddress1 + ' ' + contactData.streetAddress2);
            cy.get('td').eq(6).should('contain.text', contactData.city);
            cy.get('td').eq(6).should('contain.text', contactData.state);
            cy.get('td').eq(6).should('contain.text', contactData.postalCode);
            cy.get('td').eq(7).should('have.text', contactData.country);
        });
    };

}

export const addContact = new AddContact();
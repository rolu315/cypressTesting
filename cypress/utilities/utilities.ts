import { faker } from '@faker-js/faker';

export function generateRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName, provider: 'test.faker.dev' });
    const password = faker.internet.password({ length: 8 });

    return {
        firstName,
        lastName,
        email,
        password
    };
}
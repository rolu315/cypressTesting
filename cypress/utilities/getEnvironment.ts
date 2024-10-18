export function getEnvironment(): string {
    const url = Cypress.config().baseUrl;

    if (url.includes("www.somewebsite.com")) {
        return "production";
    } else if (url.includes("integration")) {
        return "integration";
    } else if (url.includes("qa")) {
        return "qa";
    } else if (url.includes("staging")) {
        return "staging";
    } else if (url.includes("sandbox")) {
        return "integration";
    } else if (url.includes("api.somewebsite.com") || url.includes("api")) {
        return "api";
    } else {
        throw new Error("Invalid environment");
    }
}
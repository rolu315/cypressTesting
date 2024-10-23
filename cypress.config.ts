import webpack from "@cypress/webpack-preprocessor";
import { defineConfig } from "cypress";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}

export default defineConfig({
  projectId: '159qfe',
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/output-[hash].xml",
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  video: false,
  env: {
    host: "https://thinking-tester-contact-list.herokuapp.com",
  },
  e2e: {
    specPattern: ["**/*.cy.ts"],
    supportFile: "cypress/support/e2e.ts",
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    setupNodeEvents,
  }
});

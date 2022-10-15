const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,

  },

  e2e: {
    watchForFileChanges:false,
    pageLoadTimeout: 90000,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,

    "baseUrl":'https://www.vangoghmuseum.nl',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

       
    },
    specPattern:'./cypress/e2e/TestCases/*.js'
  },
});

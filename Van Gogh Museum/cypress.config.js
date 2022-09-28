const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    pageLoadTimeout: 90000,
    chromeWebSecurity: false,


    
    "baseUrl":'https://www.vangoghmuseum.nl',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern:'cypress/e2e/TestSuite/*.feature'
  },
});

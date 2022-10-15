// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('trim',{prevSubject:'element'},(ele)=>{
      

    let ProductPrice=ele.text()
      

      let number=ProductPrice.replace(/[^a-zA-Z0-9 .]/g, '');
      

      return cy.wrap(number)

      

})

Cypress.Commands.add('cookieAlert',()=>{


  cy.xpath('//button[contains(@class,"cookie-banner-button") and contains(text(),"Akkoord")]')
  .click()
})
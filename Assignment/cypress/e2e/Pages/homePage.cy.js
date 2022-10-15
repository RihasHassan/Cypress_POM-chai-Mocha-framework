/// <reference types="cypress"/>

export class homePage{

    Clicking_Link_Locator='.cta-list-item a'

    clickOnLink(clicksOn)    

	{    

          cy.get(this.Clicking_Link_Locator).contains(clicksOn).scrollIntoView().click({ force: true })

    }






}
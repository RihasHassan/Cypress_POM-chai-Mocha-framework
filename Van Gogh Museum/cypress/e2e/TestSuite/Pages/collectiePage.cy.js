/// <reference types="cypress"/>

export class collectiePage{

searchField_locator='.search-field-input'
searchButton_locator='button[type="submit"]'
searchResultCount_Locator='.collection-art-object-list-results'

firstProduct_Locator_xpath='(//div[@class="collection-art-object-list-item"])[1]//img'


PainitingDetails_Locator='.definition-list-item'
F_number_Locator_xpath='//dt[.="F-nummer"]//..//dd'
JH_nummer_Locator_xpath='//dt[.="JH-nummer"]//..//dd'
Inventarisnummer_Locator_xpath='//dt[.="Inventarisnummer"]//..//dd'


searchWithItem(searchingItem)    

{
   
    cy.get(this.searchField_locator).type(searchingItem ,{force: true})
      .get(this.searchButton_locator).click({force: true})
      cy.wait(4000)
      
}

searchResultCount()
{
    cy.wait(1000)

     return cy.get('.results').trim()   
}

clicksOnFirstProduct()
{
   cy.xpath(this.firstProduct_Locator_xpath)
   .invoke('show')
    .first()
    .click({force:true})
    
}



clicksOnObjectgegevens()
{
       cy.wait(1000)

        cy.get('button[aria-label="Open Objectgegevens"]').scrollIntoView().click({ force: true })
}
PaintingDetailsCheck()

{

    cy.get(this.PainitingDetails_Locator)
       .within(()=>{


        cy.xpath('dt[.="F-nummer"]//..//dd')
           .invoke('text')
           .as('F_nummer')

        cy.xpath(this.JH_nummer_Locator_xpath)
           .invoke('text')
           .as('JH_nummer')

        cy.xpath(this.Inventarisnummer_Locator_xpath)
           .invoke('text')
           .as('Inventarisnummer')   

    })
    
    

}




}
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import {homePage} from "../Pages/homePage.cy"

const Homepage=new homePage()
const CollectiePage=new collectiePage()
import {collectiePage} from "../Pages/collectiePage.cy"

const expectedDataJson=require('../../../fixtures/ExpectedData.json')


//First scenario :Verify that user gets in to the collection page after clicking on -> Ontdek de collectie


Given('user is on home page',function(){

                    cy.visit('/')
                    cy.cookieAlert()
})

When('user clicks on Ontdek de collectie',function()

    {
              Homepage.clickOnLink('Ontdek de collectie')
   })

Then('verifying user is on collection page',function(){

     cy.url().should('include','collectie')

    })


 //Second scenario : Verify that you search reult for Het Gele Huis is more than 700 results


Given('user is on collection search page',function(){

      cy.visit('/nl/collectie')
      cy.cookieAlert()
    })

When('user enter Het Gele Huis in to search filed and clicks on search button',function(){

     CollectiePage.searchWithItem(expectedDataJson.SearchingItem)
    
   })

Then ('verifying that search reult for Het Gele Huis is more than 700 results or not',function(){

    CollectiePage.searchResultCount().then(ActualtotalNumberOfResults=>{

    expect(parseInt(ActualtotalNumberOfResults)).to.greaterThan(expectedDataJson.searchResultCount)

    })

})


//Third scenario :Verify the details of painting selected from search list of Het Gele Huis

Then('user selects first item from search list',function(){

       CollectiePage.clicksOnFirstProduct()

})


Then('user is on paintig details page and then clicks on Objectgegevens',function(){
    
       CollectiePage.clicksOnObjectgegevens()

})

Then('user verying deatils of selected painting from from search list of Het Gele Huis',function(){

     CollectiePage.PaintingDetailsCheck()

    cy.get('@F_nummer').then(ActualFnummer=>{
    
            expect(ActualFnummer).to.eq(expectedDataJson.F_nummer)
        
        })

    cy.get('@JH_nummer').then(ActualJH_nummer=>{
    
        expect(ActualJH_nummer).to.eq(expectedDataJson.JH_nummer)
    
    })

    cy.get('@Inventarisnummer').then(ActualInventarisnummer=>{
    
    expect(ActualInventarisnummer).to.eq(expectedDataJson.Inventarisnummer)
    
    })

})



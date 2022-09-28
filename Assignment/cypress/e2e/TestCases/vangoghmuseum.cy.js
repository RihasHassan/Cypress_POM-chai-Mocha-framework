
/// <reference types="cypress"/>

import {homePage} from "../Pages/homePage.cy"
import {collectiePage} from "../Pages/collectiePage.cy"


const expectedDataJson=require('../../fixtures/ExpectedData.json')

const Homepage=new homePage()
const CollectiePage=new collectiePage()


describe('Vangoghmuseum Test Case Suite',()=>{



it('Verify that user gets in to the collection page after clicking on -> Ontdek de collectie',()=>{

         cy.visit('/')

         cy.cookieAlert()

         Homepage.clickOnLink('Ontdek de collectie')
         cy.log(' user gets in to the collection page after clicking on -> Ontdek de collectie')

         cy.url().should('include','collectie')//verifying that user is on collectie page or not 

})

it('Verify that search reult for Het Gele Huis is more than 700 results',()=>{

       cy.visit('/nl/collectie')

       cy.cookieAlert()

       CollectiePage.searchWithItem(expectedDataJson.SearchingItem)

       cy.log('Veriying search result count is greater than 700....')

       CollectiePage.searchResultCount().then(ActualtotalNumberOfResults=>{

                //verifying that search result count is > 700
                 expect(parseInt(ActualtotalNumberOfResults)).to.greaterThan(expectedDataJson.searchResultCount)
         
               })

})



it('Verify the details of painting selected from search list of Het Gele Huis',()=>{
      
      cy.visit('/nl/collectie')

      cy.cookieAlert()


         CollectiePage.searchWithItem(expectedDataJson.SearchingItem)
         CollectiePage.clicksOnFirstProduct()
         CollectiePage.clicksOnObjectgegevens()
         CollectiePage.PaintingDetailsCheck()

        //verifying the details of selected paint 

    cy.log('Veriying expected Fnummer is showing or not....')

     cy.get('@F_nummer').then(ActualFnummer=>{
          
          expect(ActualFnummer).to.eq(expectedDataJson.F_nummer)
       
        })

    cy.log('Veriying expected JH_nummer is showing or not....')

    cy.get('@JH_nummer').then(ActualJH_nummer=>{

       expect(ActualJH_nummer).to.eq(expectedDataJson.JH_nummer)
    
   })
    
   cy.log('Veriying expected Inventarisnummer is showing or not....')

    cy.get('@Inventarisnummer').then(ActualInventarisnummer=>{
    
    expect(ActualInventarisnummer).to.eq(expectedDataJson.Inventarisnummer)
    
    })

})


})
///<reference types="cypress"/>            //when i add this here, cy. ile inteligently reach methods
///<reference types="Cypress-iframe" />    //first we write in terminalto install    npm install -D cypress-iframe     then import this plug in into our test file
import 'cypress-iframe'                    //then import this plug in into our test file
describe('My test suit',function(){
    it('iframe test',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 
cy.frameLoaded('#courses-iframe')   //find iframe
//cy.frame.find('locaterOfElement IN iframe')  cy.frame means , search an elelemnt in iframe
//then find an element in iframe  , eq ile index aldik  2 element belirdi locater ile
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.wait(2000)  //cypress default 4 sn bekler , ama bu surede bulamadi , bundan dolayi ekledim

//h1[class*="pricing-title locater for two elements in mentorship section , verify this
cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)  

//if you are doing something in frame , use this cy.iframe()








    


})

    })
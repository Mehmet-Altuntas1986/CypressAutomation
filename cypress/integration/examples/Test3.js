///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test3 suit',function(){

    it('Automation website',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       //checkbox option one
       cy.get('#checkBoxOption1').check().should('be.checked')   //has tick sign  -- behavioural olunaca be kullan assertion da
    })


})



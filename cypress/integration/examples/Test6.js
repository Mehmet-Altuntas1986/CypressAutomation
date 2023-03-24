///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test suit',function(){
    it('my first test to visit a website',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 
    //first way  use jquery show method by invoking it
  /* 
cy.get('div.mouse-hover-content').invoke('show')  //'#mousehover' da hata verir, cunku parent olmali ki child lar show methodu ile gorulebilmeli
cy.contains('Top').click()
cy.url().should('include','top')

   */
    
   //second way force to click invisible buttons under other buttons

   cy.contains('Top').click({force:true})  //Top button -invisible  --->it is under hover button , move with mouse to see it in the website
   cy.url().should('include','top')





    



})

    })
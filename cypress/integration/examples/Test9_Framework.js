///<reference types="cypress"/>            //when i add this here, cy. ile inteligently reach methods
///<reference types="Cypress-iframe" />    //first we write in terminalto install    npm install -D cypress-iframe     then import this plug in into our test file
import 'cypress-iframe'                    //then import this plug in into our test file
describe('My test suit',function(){
   
   before(function(){

   })
   
   
   
    it('my first test to visit a website',function(){
       cy.visit('https://rahulshettyacademy.com/angularpractice/');
       cy.get("input[name='name']:nth-child(2)")



    



})

    })
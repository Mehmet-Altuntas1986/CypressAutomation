///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test suit',function(){
    it('my first test to visit a website',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('[class="search-keyword"]').type('brocoli')      //elementi css locater ile bul , icine brocoli yaz
    })

    
})
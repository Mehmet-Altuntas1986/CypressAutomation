///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test suit',function(){
     it('my first test to visit a website',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')      // elementi css locater ile bul , icine ca yaz
        cy.wait(2000)   //2 saniye bekle
        //selenium get hit url in browser, cypress get acts like findelement of selenium
        cy.get(".product:visible").should('have.length',4)     //4 tane resimli element belirmisti ca yazinca search kismina

        cy.get(':nth-child(2) > .product-action > button') .click()   //ca yazinca 2. elemntin--- add to cart
//parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
//find the second product in products when we write ca in box


cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()   //index 0 dan basliyor  -- bu daha dynamic
//cy butun sayfayi temsil ediyor
    })

    
})
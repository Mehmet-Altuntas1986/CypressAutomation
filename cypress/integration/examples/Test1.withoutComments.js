/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My SecondTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//selenium get hit url in browser, cypress get acts like findElement of selenium


//Parent child chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)

cy.get('@productLocater').find('.product').each(($el, index, $list)=> {

    const TestVegetables=$el.find('h4.product-name').text()

  if(TestVegetables.includes('Cashews'))   //cashews yazisinin oldugu scope taysak (o resmin icine geldik, artik bir tane button var o resmin html inde)    
{
        cy.wrap($el).find('button').click()     //each kullaniminda wrap() i kullan , boylece click gibi methodlari kullanabilirsin
}
 
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
 
})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())
 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )
///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test suit',function(){
    it('my first test to visit a website',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
       cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
        const text=$e1.text()
        if(text.includes("Python"))
        {
     
           // promise here(cy.get("tr td:nth-child(2)").eq(index).next()) , 
           //resolve the promise, then you can use text() method of jquery
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
             const priceText=   price.text()
             expect(priceText).to.equal('26')
            })
        }
     
    })
     
     
 





    



})

    })
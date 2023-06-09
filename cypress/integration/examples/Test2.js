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
       cy.get('.products').find('.product').should('have.length',4)  //cy.get('.products').find('.product')  4 pictures it has
//find the second product in products when we write ca in box

cy.get('.products').as('productLocater')   // cy.get('.products') get in icindeki locater a takma bir isim verdik , verilen isim onemli degil

console.log('sf')  //browser console kismina yazar (non cypress item olunca)  //bunu cypress test runner a koymaz, cy ile baslamadigindan sequence islemini takmaz
//cy.log() ile test runner da sonuc belirir
cy.get('@productLocater').find('.product').eq(1).contains('ADD TO CART').click()   //index 0 dan basliyor  -- bu daha dynamic
//cy butun sayfayi temsil ediyor

//i will iterate 4 products  , uzerinde cashews yazili olani bulup , add to cart yapacagim

cy.get('@productLocater').find('.product').each(($el, index, $list)=> {

   const TestVegetables=$el.find('h4.product-name').text()

 if(TestVegetables.includes('Cashews'))   //cashews yazisinin oldugu scope taysak (o resmin icine geldik, artik bir tane button var o resmin html inde)    
{
       cy.wrap($el).find('button').click()     //each kullaniminda wrap() i kullan , boylece click gibi methodlari kullanabilirsin
}

//each in kullanimi icin uzerine mouse ile uzerine gel , websitesine bu sekilde ulasabilirsin


})

//Text is jquery object, we should resolve the promise (cy.get('.brand')) ,then we can use the text() method of jquery
// bir isim verdik (GREENKART YAZSI ->logoelement ile kastettigimiz) -- cy.get('.brand') ile buldugumuz
cy.get('.brand').then(function(logoelement){
   cy.log(logoelement.text())

})

//After choosing cashews , click the shoping bag logo
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()





     })

})


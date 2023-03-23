///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test suit',function(){
    it('my first test to visit a website',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

         //cypress handles alerts auto , but if you want to check texts , we should 
   //manupulate html dom with cypress by using events in cypress documentation
   //asagidaki islemde alert box i goremiyoruz , cunku auto handled
   cy.get('#alertbtn').click()
   cy.get('[value="Confirm"]').click()
//lets manupulate dom , then click alert button , see alert box and text
//cy.on is used for cypress events - https://docs.cypress.io/api/events/catalog-of-events
//str string oldugunu belirtmek icin   
//now fire the event  => 
cy.on('window:alert',(str)=>{
//mocka
expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm',(str)=>{
//mocka
expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//windows handle , cpress can open only one tab, cannot switch to another tab. when we
//click to a button and then a new window tab opens , we call jquery removeAttr mehhod to 
//remove  target atribute related to this clicked button.When the target attribute with
// cypress dom manipulation removed  after click , it opens in the same tab

//invoke ('method name in jquery','attribute name in dom')

//remove target attribute , then it opens in the same window tab page  after click
cy.get('#opentab').invoke('removeAttr','target').click()

//Turn back to the page before you click the button
//https://docs.cypress.io/api/commands/go#docusaurus_skipToContent_fallback

cy.go('back')
   
//how we will undestand that we are in the same page   ---with url change or not
cy.url().should('include','rahulshettyacademy')


})

    })


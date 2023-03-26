// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//simdi shop kismindaki telefon isimlerinin hepsini icine alacak bir locater ve onlari iteration ile bulma
//Cypress.Commands.add ('Give name to show what you are doing', function(){ code here })

Cypress.Commands.add("selectProduct",(productName)=>{
 cy.get('h4.card-title').each(    ($el,index,$list)=>  { 
   if( $el.text().includes(productName) ){
     cy.get('button.btn.btn-info').eq(index).click()  //index de dongude artiyor , bulunan elementin index i ile ayni oluyor  //index 0 1. element ,  index 1 2.element
     //cy.log(index) //3   4. element

    } 
  }) 
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
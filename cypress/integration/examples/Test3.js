///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test3 suit',function(){

    it('Automation website',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       //checkbox option one
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')   //has tick sign  -- behavioural olunaca be kullan assertion da
    
       //uncheck the option1 button , then make assertion by using should
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

       //now choose multiple checkboxes in one locater , and check if there are option2 and option3 checkboxes

       cy.get('input[type="checkbox"]').check(['option3','option2'])

       //static dropdown --baska ulke eklendiginde sorun olusur
       cy.get('select').select('option2').should('have.value','option2')

       //dynamic dropdown handles -- with iteration  (ind yazica 3 ulke cikti)
       cy.get('#autocomplete').type('ind')
       cy.get('.ui-menu-item div').each(($el, index, $list) => { 
      if($el.text()==="India"){
          cy.wrap($el).click()
       }
       })

    //india was choosen and clicked, make an assert
    cy.get('#autocomplete').should('have.value','India')

    //lets check visibility 
    cy.get('#displayed-text').should('be.visible')   
    cy.get('#hide-textbox') .click()
    cy.get('#displayed-text').should('not.be.visible')  
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')  

    



    
})


})



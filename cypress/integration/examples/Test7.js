///<reference types="cypress"/>     //when i add this here, cy. ile inteligently reach methods

describe('My test suit',function(){
    it('my first test to visit a website',function(){      //function yerine => bu sign i kullanabilirim
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 
//we can grab the url opened after click in new window , then we can visit it , but it  functions in subdomains     
cy.get('#opentab').then(function(el){    
       const url=el.prop('href')  //open tab a tikladiktan sonra cikan url yi bulduk ama ona visit exdemedik , test runner da sebebini yaziyor
       cy.log(url)   //grabs the url
       cy.visit(url)
   }) 


    
    



    



})

    })
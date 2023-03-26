class HomePage{

getEditBox(){
    
      return cy.get("input[name='name']:nth-child(2)")
}


getTwoWayDataBinding(){
    return cy.get(':nth-child(4) > .ng-pristine')    
}


getEditBox(){
return cy.get("input[name='name']:nth-child(2)")
}

getGender()
{
    return cy.get('select')
}


get EntrepreneaurRadioButton(){
    return cy.get('#inlineRadio3')
        
}


getShopTab(){
    return cy.get(':nth-child(2) > .nav-link')
}





}


//export class to make it available to use in other files of our project
//bu class is not related to cypress , that is why , we should inport it in the testpages
export default HomePage;
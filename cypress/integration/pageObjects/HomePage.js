class HomePage{

    getEditBox(){

        return cy.get("input[name='name']:nth-child(2)")
        }


}


//export class to make it available to use in other files of our project
export default HomePage;
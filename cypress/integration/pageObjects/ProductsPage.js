class productsPage{

    checkOutButton1(){
        return cy.get(".nav-link.btn.btn-primary")
    }

    checkoutButton2(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
}
export default productsPage;

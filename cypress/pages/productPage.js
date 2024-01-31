class productPage{
    
    elements = {
        addToCartBtn : () => cy.get('#btn-add-to-cart'),
        cartCount : () => cy.get('#lblCartCount'),
    }

    verifyPage(){
        this.elements.addToCartBtn().should('have.text','Add to cart ')
    }

    addToCart(){
        this.elements.addToCartBtn().click()
    }

    verifyCartCount(){
        this.elements.cartCount().should('have.text', '1')
    }
}

export default productPage
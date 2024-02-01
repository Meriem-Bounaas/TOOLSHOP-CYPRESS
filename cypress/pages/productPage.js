class productPage{
    
    elements = {
        addToCartBtn : () => cy.get('#btn-add-to-cart'),
        cartCount : () => cy.get('#lblCartCount'),
        cartBtn : () => cy.xpath('//span[@id="lblCartCount"]/parent::a')
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

    goToCart(){
        this.elements.cartBtn().click()
    }
}

export default productPage
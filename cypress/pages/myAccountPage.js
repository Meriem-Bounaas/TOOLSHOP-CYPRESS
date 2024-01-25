class myAccountPage{
    
    elements = {
        myAccountText : () => cy.get('.container h1 '),
        userMenu : () => cy.get('#user-menu'),
        signOut : () => cy.xpath('//div[@id="navbarSupportedContent"]/ul/li[4]/ul/li[7]')
    }

    verifyPage(){
        this.elements.myAccountText().should('have.text', 'My account')
        cy.url().should('eql', 'https://practicesoftwaretesting.com/#/account')
    }

    logout(){
        this.elements.userMenu().click() 
        this.elements.signOut().click() 
    }
}

export default myAccountPage
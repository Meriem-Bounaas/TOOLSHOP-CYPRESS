class loginPage{
    elements={
        registerLink : () => cy.xpath("//a[text()='Register your account']")
        
    }

    verifyPage(){
        cy.url().should('eq', 'https://practicesoftwaretesting.com/#/auth/login')
    }

    goToRegistrationPage(){
        this.elements.registerLink().click()
    }


}

export default loginPage
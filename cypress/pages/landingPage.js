class landingPage {

    elements={
        sortText : () => cy.xpath("//div[@id='filters']/h4[1]"),
        signInBtn : () => cy.xpath("//a[text()= 'Sign in']")
    }

    verifyPage(){
        this.elements.sortText().should('have.text', ' Sort')
    }

    goToSignInPage(){
        this.elements.signInBtn().click()
    }
}

export default landingPage
class registrationPage{

    elements={
        firstnameInput : () => cy.get('#first_name'),
        lastnameInput : () => cy.get('#last_name'),
        birthDateInput : () => cy.get('#dob'),
        adressInput : () => cy.get('#address'),
        postCodeInput : () => cy.get('#postcode'),
        cityInput : () => cy.get('#city'),
        statInput : () => cy.get('#state'),
        countryInput : () => cy.get('#country'),
        phoneInput : () => cy.get('#phone'),
        emailInput : () => cy.get('#email'),
        passwordInput : () => cy.get('#password'),
        registerBtn : () => cy.xpath("//button[@type='submit']")
    }

    verifyPage(){
        cy.url().should('eql', 'https://practicesoftwaretesting.com/#/auth/register')
    }

    fillForm(){
        this.elements.firstnameInput().type('dfds')
        this.elements.lastnameInput().type('sfsfs')
        this.elements.birthDateInput().type(54512)
        this.elements.adressInput().type('efdsfer')
        this.elements.postCodeInput().type('38100')
        this.elements.cityInput().type('fdggd')
        this.elements.statInput().type('gfdg')
        this.elements.countryInput().select('AS')

        this.elements.phoneInput().type('5105105613')
        this.elements.emailInput().type('dfsd@fdsg.com')
        this.elements.passwordInput().type('testtest123')
        this.elements.registerBtn().click()
    }
}

export default registrationPage
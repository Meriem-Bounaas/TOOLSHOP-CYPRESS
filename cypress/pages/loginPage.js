class loginPage{
    
    elements={
        registerLink : () => cy.xpath("//a[text()='Register your account']"),
        emailInput : () => cy.get('#email'),
        passwordInput : () => cy.get('#password'),
        loginBtn : () => cy.xpath("//input[@type='submit']"),
        emailRequired : () => cy.xpath("//div[@class='alert alert-danger']"),
        emailPasswordRequired : () => cy.xpath("//input[@type='submit']/parent::div/following-sibling::div/div")
    }

    verifyPage(){
        cy.url().should('eq', 'https://practicesoftwaretesting.com/#/auth/login')
    }

    goToRegistrationPage(){
        this.elements.registerLink().click()
    }

    loginOk(){
        cy.fixture('registration_OK').then((data) =>{
            this.elements.emailInput().type(data.email)
            this.elements.passwordInput().type(data.password)
        })

        this.elements.loginBtn().click()
    }

    loginKo(){
        cy.fixture('login_KO').then((data) =>{
            data.forEach((d)=>{
                this.elements.emailInput().clear().then(e => { if (d.email !== '') cy.wrap(e).type(d.email) });
                this.elements.passwordInput().clear().then(e => { if (d.password !== '') cy.wrap(e).type(d.password) });
                this.elements.loginBtn().click()

                this.verifyRequiredAlert(d.required)
            })
        })

    }

    verifyRequiredAlert(required){
        if (required == 'email') {
            this.elements.emailRequired().should('have.text', ' E-mail format is invalid. ')
        } else {
            this.elements.emailPasswordRequired().should('have.text', 'Invalid email or password')
        }
    }

}

export default loginPage
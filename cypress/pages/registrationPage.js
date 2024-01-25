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
        registerBtn : () => cy.xpath("//button[@type='submit']"),

        textRequired : () => cy.xpath('//button[@type="submit"]/following-sibling::div/div/div'),

        firstnameRequired : () => cy.xpath('//label[contains(text(), "First name")]/parent::div/following-sibling::div/div'),
        adressRequired : () => cy.xpath('//label[contains(text(), "Address")]/following-sibling::div/div'),
        postCodeRequired : () => cy.xpath('//label[contains(text(), "Postcode")]/parent::div/following-sibling::div/div'),
        cityRequired : () => cy.xpath('//label[contains(text(), "City")]/parent::div/following-sibling::div/div'),
        statRequired : () => cy.xpath('//label[contains(text(), "State")]/parent::div/following-sibling::div/div'),
        phoneRequired : () => cy.xpath('//label[contains(text(), "Phone")]/following-sibling::div/div'),
        emailRequired : () => cy.xpath('//label[contains(text(), "E-mail address")]/following-sibling::div/div'),
        passwordRequired : () => cy.xpath('//label[contains(text(), "Password")]/following-sibling::div/div'),
    }

    verifyPage(){
        cy.url().should('eql', 'https://practicesoftwaretesting.com/#/auth/register')
    }

    fillFormOk(){
        cy.fixture('registration_OK').then((data) =>{
            this.elements.firstnameInput().clear().type(data.firstname)
            this.elements.lastnameInput().clear().type(data.lastname)
            this.elements.birthDateInput().clear().type(data.dateBirthday)
            this.elements.adressInput().clear().type(data.adress)
            this.elements.postCodeInput().clear().type(data.postcode)
            this.elements.cityInput().clear().type(data.city)
            this.elements.statInput().clear().type(data.stat)
            this.elements.countryInput().select('FR')
            this.elements.phoneInput().clear().type(data.phone)
            this.elements.emailInput().clear().type(data.email)
            this.elements.passwordInput().clear().type(data.password)
        })
        
        this.elements.registerBtn().click()
    
    }
    
    fillFormKo(){
        cy.fixture('registration_KO').then((data) =>{
            data.forEach((d)=>{
                this.elements.firstnameInput().clear().then(e => { if (d.firstname !== '') cy.wrap(e).type(d.firstname) });
                this.elements.lastnameInput().clear().then(e => { if (d.lastname !== '') cy.wrap(e).type(d.lastname) });
                this.elements.birthDateInput().clear().then(e => { if (d.dateBirthday !== '') cy.wrap(e).type(d.dateBirthday) });
                this.elements.adressInput().clear().then(e => { if (d.adress !== '') cy.wrap(e).type(d.adress) });
                this.elements.postCodeInput().clear().then(e => { if (d.postcode !== '') cy.wrap(e).type(d.postcode) });
                this.elements.cityInput().clear().then(e => { if (d.city !== '') cy.wrap(e).type(d.city) });
                this.elements.statInput().clear().then(e => { if (d.stat !== '') cy.wrap(e).type(d.stat) });
                this.elements.countryInput().select('FR')
                this.elements.phoneInput().clear().then(e => { if (d.phone !== '') cy.wrap(e).type(d.phone) });
                this.elements.emailInput().clear().then(e => { if (d.email !== '') cy.wrap(e).type(d.email) });
                this.elements.passwordInput().clear().then(e => { if (d.password !== '') cy.wrap(e).type(d.password) });
                this.elements.registerBtn().click()

                this.verifyRequiredAlert(d.required)
            })

        })
    }

    verifyRequiredAlert(required){
        switch (required) {
            case 'firstname':
                this.elements.firstnameRequired().should('have.text', ' First name is required. ')
                break;
            case 'lastname':
                this.elements.textRequired().should('have.text', 'The last name field is required.')
                break;
            case 'datebirthday':
                this.elements.textRequired().should('have.text', 'Customer must be 18 years old.')
                break;
            case 'adress':
                this.elements.adressRequired().should('have.text', ' Address is required. ')
                break;
            case 'postcode':
                this.elements.postCodeRequired().should('have.text', ' Postcode is required. ')
                break;
            case 'city':
                this.elements.cityRequired().should('have.text', ' City is required. ')
                break;
            case 'stat':
                this.elements.statRequired().should('have.text', ' State is required. ')
                break;
            case 'phone':
                this.elements.phoneRequired().should('have.text', ' Phone is required. ')
                break;
            case 'email':
                this.elements.emailRequired().should('have.text', ' E-mail is required. ')
                break;
            case 'password':
                this.elements.passwordRequired().should('have.text', ' Password is required. ')
                break;

            default:
              console.log(`Sorry, we are out of ${required}.`);
          }
    }
}

export default registrationPage
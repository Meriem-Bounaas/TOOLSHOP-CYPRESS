import creditCardGenerator from 'creditcard-generator'

class checkoutPage {

    elements={
        proceedToCheckoutBtn : () => cy.xpath("//table/following-sibling::div/button"),
        emailInput : () => cy.get("#email"),
        passwordInput : () => cy.get("#password"),
        loginBtn : () => cy.xpath("//input[@type='submit']"),
        alreadyLoggedElement : () => cy.xpath("//div[@class='row']/div/p"),
        creditCardInput : () => cy.xpath("//input[@placeholder='Credit Card Number']"),
        expirationDateInput : () => cy.xpath("//input[@placeholder='Expiration Date']"),
        cvvInput : () => cy.xpath("//input[@placeholder='CVV']"),
        cardNameInput : () => cy.xpath("//input[@placeholder='Card Holder Name']"),
        confirmPaymentBtn : () => cy.xpath("//button[text()=' Confirm ']"),
        checkoutBtn : () => cy.xpath("//div[@class='float-end']/button"),
        paymentSuccessful : () => cy.get('.help-block'),
        billingAdrressText : () => cy.xpath("//h3[text()='Billing Address']"),
        paymentText : () => cy.xpath("//h3[text()='Payment']"),

    }

    verifyPage(){
        this.elements.proceedToCheckoutBtn().eq(0).should('have.text', 'Proceed to checkout')
    } 

    verifySignInPage(){
        this.elements.alreadyLoggedElement().contains('you are already logged in')
    }

    sigIn(){
        this.elements.checkoutBtn().eq(1).click()
    }

    verifyAddressPage(){
        this.elements.billingAdrressText().should('have.length', 1)
    }

    
    addAddress(){
        this.elements.checkoutBtn().eq(2).click()
    }
    
    verifyPaymentPage(){
        this.elements.paymentText().should('have.length', 1)
    }

    generateCreditCard() {
        const creditCard = creditCardGenerator.GenCC(); 

        const cvv = Math.floor(Math.random() * 900) + 100;

        const expirationYear = new Date().getFullYear() + Math.floor(Math.random() * 8) + 3;
        const expirationMonth = Math.floor(Math.random() * 12) + 1; // Ajout de 1 pour obtenir un mois entre 1 et 12

        const formattedExpirationDate = expirationMonth.toString().padStart(2, '0') + '/' + expirationYear;
    
        const cardName = "Tomas Mercer";
    
        return {
            creditCardNumber: creditCard,
            cvv: cvv,
            expirationDate: formattedExpirationDate,
            cardName: cardName
        };
    }

    formatCreditCardNumber(creditCardNumber) {
        const numericOnly = creditCardNumber.toString().replace(/\D/g, '');
    
        const formattedNumber = numericOnly.replace(/(\d{4})(?=\d)/g, '$1-');
    
        return formattedNumber;
    }

    payment(){
        cy.get('select').select('Credit Card')
        const creditCardData = this.generateCreditCard();

        this.elements.creditCardInput().type(this.formatCreditCardNumber(creditCardData.creditCardNumber))
        this.elements.expirationDateInput().type(creditCardData.expirationDate)
        this.elements.cvvInput().type(creditCardData.cvv)
        this.elements.cardNameInput().type(creditCardData.cardName)
        this.elements.confirmPaymentBtn().click()

    }

    verifyPaymentSuccessful(){
        this.elements.paymentSuccessful().should('have.text', 'Payment was successful')

    }

    checkout(){
        this.elements.proceedToCheckoutBtn().click()
        this.verifySignInPage()
        this.sigIn()
        this.verifyAddressPage()
        this.addAddress()
        this.verifyPaymentPage()
        this.payment()
        this.verifyPaymentSuccessful()
    }
}

export default checkoutPage
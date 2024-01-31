class landingPage {

    elements={
        sortText : () => cy.xpath("//div[@id='filters']/h4[1]"),
        signInBtn : () => cy.xpath("//a[text()= 'Sign in']"),
        pliersElement : () => cy.xpath("//div[@class='card-img-wrapper']/img[@alt='Combination Pliers']"),
        searchInput : () => cy.xpath("//div/input[@placeholder='Search']"),
        cardText : () => cy.xpath("//div[@class='card-body']/h5")
    }

    verifyPage(){
        this.elements.sortText().should('have.text', ' Sort')
    }

    goToSignInPage(){
        this.elements.signInBtn().click()
    }

    selectItems(item_name){
        cy.xpath(`//div[@class='card-img-wrapper']/img[@alt='${item_name}']`).click()
    }

    searchItem(item_name){
        this.elements.searchInput().type(item_name+'{enter}')
    }

    verifyExistanceItem(item_name) {
        cy.wait(2000);
        const normalizedItemName = item_name.toLowerCase(); // Normaliser la casse de item_name
    
        cy.xpath("//div[@class='card-body']/h5").each(card => {
            cy.wrap(card).invoke('text').then(text => {
                const normalizedText = text.toLowerCase(); // Normaliser la casse du texte de l'élément
                expect(normalizedText.includes(normalizedItemName)).to.be.true;
            });
        });
    }

    filterItem(item_name){
        cy.xpath(`//label[text()='${item_name}']/input`).check()
    }
}

export default landingPage

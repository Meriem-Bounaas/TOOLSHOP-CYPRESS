import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"

describe('Search for item', () => {

    before(() => {
        cy.visit('https://practicesoftwaretesting.com/')
    })

    let landingObj = new landingPage()
    let loginObj = new loginPage()
    let myAccountObj = new myAccountPage()
    
    it('search ok', () => {
        landingObj.verifyPage()
        landingObj.goToSignInPage()

        loginObj.verifyPage()
        loginObj.loginOk()

        myAccountObj.verifyPage()

        myAccountObj.goToHome()
        landingObj.verifyPage()

        const items_list = ['Combination Pliers', 'Pliers', 'Bolt Cutters', 'Slip Joint Pliers', 'Hammer']
        const item = items_list[Math.floor(Math.random() * items_list.length)]
        landingObj.searchItem(item)
        landingObj.verifyExistanceItem(item)

    })

})
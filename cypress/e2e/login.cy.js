import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"

describe('Login in tool shop', () => {

    beforeEach(() => {
        cy.visit('https://practicesoftwaretesting.com/')
    })
    
    let landingObj = new landingPage()
    let loginObj = new loginPage()
    let myAccountObj = new myAccountPage()

    it('login ok', () => {
        landingObj.verifyPage()
        landingObj.goToSignInPage()

        loginObj.verifyPage()
        loginObj.loginOk()

        myAccountObj.verifyPage()

    })

    it('login ko', () => {
        landingObj.verifyPage()
        landingObj.goToSignInPage()

        loginObj.verifyPage()
        loginObj.loginKo()
        loginObj.verifyRequiredAlert()

    })

})
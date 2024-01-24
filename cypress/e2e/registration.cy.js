import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import registrationPage from "../pages/registrationPage"

describe('authentification', () => {

  before(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  it('registration', () => {
    let landingObj = new landingPage()
    landingObj.verifyPage()
    landingObj.goToSignInPage()

    let loginObj = new loginPage()
    loginObj.verifyPage()
    loginObj.goToRegistrationPage()

    let registrationObj = new registrationPage()
    registrationObj.verifyPage()
    registrationObj.fillForm()
  })

})
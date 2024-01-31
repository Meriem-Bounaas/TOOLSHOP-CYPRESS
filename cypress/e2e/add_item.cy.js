import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"
import productPage from "../pages/productPage"

describe('Add Items', () => {

  before(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  let landingObj = new landingPage()
  let loginObj = new loginPage()
  let myAccountObj = new myAccountPage()
  let productObj = new productPage()

  it('add items ok', () => {
        landingObj.verifyPage()
        landingObj.goToSignInPage()

        loginObj.verifyPage()
        loginObj.loginOk()

        myAccountObj.verifyPage()
        myAccountObj.goToHome()
        landingObj.verifyPage()

        const items_list = ['Combination Pliers', 'Pliers', 'Bolt Cutters', 'Slip Joint Pliers', 'Hammer']
        const item = items_list[Math.floor(Math.random() * items_list.length)]
        landingObj.selectItems(item)

        productObj.verifyPage()
        productObj.addToCart()

        productObj.verifyCartCount()
  })

})
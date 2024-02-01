import checkoutPage from "../pages/checkoutPage"
import landingPage from "../pages/landingPage"
import loginPage from "../pages/loginPage"
import myAccountPage from "../pages/myaccountPage"
import productPage from "../pages/productPage"

describe('checkout', () => {
    
  before(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
  
  let landingObj = new landingPage()
  let loginObj = new loginPage()
  let myAccountObj = new myAccountPage()
  let productObj = new productPage()
  let checkoutObj = new checkoutPage()
  
  it('checkout ok', () => {
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
        
        productObj.goToCart()
        checkoutObj.verifyPage()
        checkoutObj.checkout()


  })

})
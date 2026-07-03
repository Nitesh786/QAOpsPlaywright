const {Given, When, Then } = require('@cucumber/cucumber')
const {POManager} =   require ('../../pageobjects/POManager');
const {expect} = require("@playwright/test")
const playwright = require("@playwright/test")
Given(': a login to Ecommerce application with {string} and {string}',{timeout: 100 * 1000},async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
//*******************       Login Page    ********************************
    const products = this.page.locator(".card-body");
    const loginPage = this.poManager.getloginPage()//calling method 
    await loginPage.goTo()//calling method of hitting url from loginPage file
    await loginPage.validlogin(username,password)//calling method of login code
    this.dashboardPage  = this.poManager.getdashboardPage()
});
When('Add {string} added to cart',async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage  = this.poManager.getdashboardPage()
  await this.dashboardPage.searchProductAddCart(productName)
   await this.dashboardPage.navigateToCart();
});
Then('verify {string} is displayed in cart',async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage =  this.poManager.getcartPage()
  await cartPage.VerifyProductIsDisplayed(productName)
  await cartPage.Checkout()
});
When('Enter valid details  and place the order', async function () {
  // Write code here that turns the phrase above into concrete actions
  const ordersReviewPage=  this.poManager.getordersReviewPage()
  await ordersReviewPage.searchCountryAndSelect("ind","India")
   this.orderId = await ordersReviewPage.SubmitAndGetOrderId()
  console.log( this.orderId);
});
Then('Verify order if present in  the orderHistory',async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboardPage.navigateToOrders();
 //*******************       orders History Page    ********************************  
  const ordersHistoryPage = this.poManager.getorderHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect( this.orderId);
   expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given(': a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
  //Write code here that turns the phrase above into concrete actions
  const userName = this.page.locator('input#username') // created variable username & added locator inside it
  const signIn = this.page.locator('input#signInBtn') // created variable signIn & added locator inside it
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await this.page.title()) // Printing page title
 await expect(this.page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
 await userName.fill(username) //  entering rahulshetty inside username 
 await this.page.locator('input#password').fill(password)  // located password element & entering rahulshetty
 await signIn.click ()// clicking on signin button
 });
Then('verify error message is displayed',async function () {
  // Write code here that turns the phrase above into concrete actions
   console.log(await this.page.locator("[style*='block;']").textContent()) // locating & grabbing error message & printing in console
 await expect(this.page.locator("[style*='block;']")).toContainText("Incorrect")
});







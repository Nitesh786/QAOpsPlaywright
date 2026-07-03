const {test,expect } = require('@playwright/test');
const{customtest} =  require('../Utlis1/test-base')//import the test-base file inside our main test file
const {POManager} =   require ('../pageobjects/POManager');
const { describe } = require('node:test');
// Importing json file & then converting into Json string & then JSON string back into a JavaScript object.
const dataSet = JSON.parse(JSON.stringify(require ('../Utlis1/placeorderTestData.json')))

//test.describe.configure({mode:'parallel'})//command to execute the tests in parallel
//test.describe.configure({mode:'serial'})// command to execute the test in serial mode
for (const data of dataSet)
{
test (`Assignment1 ${data.productName}`, async ({ page }) => {
    const titles = page.locator("div.card-body b")// located all products text
    const items = page.locator(".card-body b")// created a common css locator of all products for add to cart
     const orderBtn = page.locator("li button") // located order button
    //*****************      Creating object of POManager file  only once   ********************
    const poManager = new POManager (page)
//*******************       Login Page    ********************************
    const loginPage = poManager.getloginPage()//calling method 
    await loginPage.goTo()//calling method of hitting url from loginPage file
    await loginPage.validlogin(data.username,data.password)//calling method of login code
//*******************       Dashboard Page    ********************************
   const dashboardPage  = poManager.getdashboardPage()
   await dashboardPage.searchProductAddCart(data.productName)
   await dashboardPage.navigateToCart();
//*******************       Cart Page    ********************************
  const cartPage =  poManager.getcartPage()
  await cartPage.VerifyProductIsDisplayed(data.productName)
  await cartPage.Checkout()
  //*******************       orders review Page    ********************************   
  const ordersReviewPage=  poManager.getordersReviewPage()
  await ordersReviewPage.searchCountryAndSelect("ind","India")
  const orderId = await ordersReviewPage.SubmitAndGetOrderId()
  console.log(orderId);
  await dashboardPage.navigateToOrders();
 //*******************       orders History Page    ********************************  
const ordersHistoryPage = poManager.getorderHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
}
customtest(`Assignment2 `, async ({ page,testDataForOrder }) => {
    const titles = page.locator("div.card-body b")// located all products text
    const items = page.locator(".card-body b")// created a common css locator of all products for add to cart
     const orderBtn = page.locator("li button") // located order button
    //*****************      Creating object of POManager file  only once   ********************
    const poManager = new POManager (page)
//*******************       Login Page    ********************************
    const loginPage = poManager.getloginPage()//calling method 
    await loginPage.goTo()//calling method of hitting url from loginPage file
    await loginPage.validlogin(testDataForOrder.username,testDataForOrder.password)//calling method of login code
//*******************       Dashboard Page    ********************************
   const dashboardPage  = poManager.getdashboardPage()
   await dashboardPage.searchProductAddCart(testDataForOrder.productName)
   await dashboardPage.navigateToCart();
//*******************       Cart Page    ********************************
  const cartPage =  poManager.getcartPage()
  await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName)
  await cartPage.Checkout()
});



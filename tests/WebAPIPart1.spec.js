const {test,expect,request} = require ('@playwright/test')
const loginPayload = {userEmail:"m1@m1.com",userPassword:"Test@123"}
const orderPayload = {orders:[{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let token; // Created  
let orderId;// created global variable for orderID
test.beforeAll( async() =>
{
    // Login API
const apiContext = await request.newContext()
const loginResponce = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginPayload
    })
    expect(loginResponce.ok()).toBeTruthy()
   const loginResponceJson =  await loginResponce.json()
   token = loginResponceJson.token
   console.log(token)
  // Create order API
  const orderResponce = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
     data: orderPayload,
     headers : 
     {
     'authorization' : token,
     'content-type' : 'application/json'
     },
    
    }) 
     const orderResponceJson =  await orderResponce.json()
     console.log(orderResponceJson) // printing responce in console
     orderId = orderResponceJson.orders[0]
});

test.beforeEach(() =>
{

});
test('Assignment', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    
      await  page.addInitScript(value =>
    {
        window.localStorage.setItem('token',value)
    },token)
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.pause()
    await page.locator("button[routerlink*='myorders']").click()// clicking on orders link text
    const productText = page.locator("div.card-body b") // located all products
    

    const prodTextList = await productText.allTextContents() // getting text of all Product & printing in console 
    console.log(prodTextList) // Printing all text items in console
    
  
/////////////////////////////////////
     const rows = await page.locator("tbody tr") // locted the row of orderId fromYour orders page & saved in rows variable
    
    for (let i = 0; i < await rows.count(); ++i) //applied for loop to iterate till the count of rows
    {
    const rowOrderId = await rows.nth(i).locator("th").textContent() //located only row list  & grabbing order id
    if (orderId.includes(rowOrderId)) // added cond if the Order id matches with the order id we ordered
    {
    await rows.nth(i).locator("button").first().click() // ifmatches then click on view button  
    break;
    }
    }
    const orderIDdetails = await page.locator(".col-text").textContent()//Located & grabbed text of orderid from details page
    await expect(orderId.includes(orderIDdetails)).toBeTruthy()//added assertion on orderid which we extracted in previous step with id of view page
    //await page.pause() // added pause
});
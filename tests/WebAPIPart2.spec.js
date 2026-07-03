const { test, expect } = require('@playwright/test');
let WebContext;
test.beforeAll(async({browser}) =>
{// adding login steps inside before all method
     const context = await browser.newContext()
     const page = await context.newPage()
     const email = page.locator("input#userEmail") // located email element
    const password = page.locator("[type='password']") // located password element
    const login = page.locator("[type='submit']") // located Login button element
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await email.fill("m1@m1.com") // Entering Email in EMail field
    await password.fill("Test@123") // Entering password in password field
    await login.click(); // clicking on login button
    await page.waitForLoadState('networkidle') // method used to load all the api after login
    await context.storageState({path:'state.json'}) //need to capture login json here
    WebContext = await browser.newContext({storageState:'state.json'})

})

test('Test 1', async () => {
    const page = await WebContext.newPage() // created a new page with object of WebContext
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")// hitting url but login will be skipped
    const productText = page.locator("div.card-body b") // located all products
    const items = page.locator(".card-body") // created a common css locator of all products for add to cart
    const addProduct = 'ZARA COAT 3' // this product needs to be added in Cart
    const cartBtn = page.locator("[routerlink*='cart']")
    const checkoutBtn = page.locator("button[type='button']").nth(1) // located Checkout button
    const cvv = page.locator("input[type='text']").nth(1) // located cvv field
    const cardName = page.locator("input[type='text']").nth(2) // Located Name on Card field
    const coupon = page.locator("input[type='text']").nth(3) // located Apply coupon field
    const couponBtn = page.locator("button[type='submit']") // located Apply coupon button
    const selectcountry = page.locator("[placeholder*='Country']") // located select country drop down
    const autosuggest = page.locator("[class*='ta-results']") //located autosuggestion results of select country
    const payEmail = page.locator("[class*='user'] [style*='color']") // located email id on Payment page for Assertion
    const emailId = ("m1@m1.com") // declared & initialized email id variable.
    const placeOrderbtn = page.locator(".action__submit") // located Placeorder btn
    const orderBtn = page.locator("li button") // located order button
    
    //await productText.first().waitFor() //Waiting for 1st Product to load
    const prodTextList = await productText.allTextContents() // getting text of all Product & printing in console 
    console.log(prodTextList) // Printing all text items in console
    const productscount = await items.count() // getting total count of all the products
    for (let i = 0; i < productscount; ++i) {
        if (await items.nth(i).locator("b").textContent() === addProduct) {
            await items.nth(i).locator("text= Add To Cart").click()
            break;
        }
    }
    await cartBtn.click() // clicking on cart button
    await page.locator("div li").first().waitFor()// added wait to load all the products inside the cart page
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible()// element is visible or not this method will return bolean value
    expect(bool).toBeTruthy();// added assertion this will return true if false then test will fail.
    await checkoutBtn.click() // clicking on checkout button
    await cvv.fill("1234") // entering cvv code in cvv field
    await cardName.fill("Nitesh Naik")// entering Name in Name on Card field
    await coupon.fill("rahulshettyacademy") // entering value in  coupon code field
    await couponBtn.click() // clicking on Apply coupon button
    await selectcountry.click()// clicking on select country drop down
    await selectcountry.pressSequentially("ind") // entering Ind in select country drop down
    await autosuggest.waitFor()// added wait for Autosuggestion results of select country drop down
    const autosuggestCount = await autosuggest.locator("button").count() // Located elements of results & fetching count
    for (let i = 0; i < autosuggestCount; ++i) {
        const text = await autosuggest.locator("button").nth(i).textContent()//iterating on 3 auto results & getting text one by one
        if (text === " India") // comparing india with all the results which is being fetch
        {
            await autosuggest.locator("button").nth(i).click()
            break;
        }
    }
    await expect(payEmail).toHaveText(emailId)// added assertion on email field to verify if it is correct
    await placeOrderbtn.click()// clicking on placeorder button
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ") //located & added assertion on success message
    const orderId = await page.locator(".content-wrap .em-spacer-1").nth(3).textContent() //located orderid & getting text of it
    await console.log(orderId) // Printing order ID in console
/////////////////////////////////////
    await orderBtn.nth(1).click() // clicking on order btn.
    await page.locator("tbody").waitFor() // Added wait so that the list of orderid loads inside the table
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

    
test('Test 2', async () => {
    const page = await WebContext.newPage() // created a new page with object of WebContext
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")// hitting url but login will be skipped
    const productText = page.locator("div.card-body b") // located all products
    //await productText.first().waitFor() //Waiting for 1st Product to load
    const prodTextList = await productText.allTextContents() // getting text of all Product & printing in console 
    console.log(prodTextList) // Printing all text items in console
})


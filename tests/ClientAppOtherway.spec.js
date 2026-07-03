const { test, expect } = require('@playwright/test');
test('Assignment', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByPlaceholder("email@example.com").fill("m1@m1.com") // located email element by placeholder
    await page.getByPlaceholder("enter your passsword").fill("Test@123") //located password element by placeholder 
    await page.getByRole("button",{name:"Login"}).click() // located Login button element
    await page.waitForLoadState('networkidle') // method used to load all the api after login
    //await productText.first().waitFor() //Waiting for 1st Product to load
    // ---------- Below code is of  Home page---------//
    // Filtering all 3 products  & selecting Zara coat 3 & clicking on Add to cart button.
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name : "Add to cart"}).click() 
    await page.getByRole("listitem").getByRole('button',{name:'Cart'}).click()// clickin on cart button
    await page.getByRole("button",{name:"Cart"}).click() // Clicking on Cart button

    // ---------- Below code is of  My Cart page---------//
    //await page.locator("div li").first().waitFor()// added wait to load all the products inside the cart page
    await expect(page.getByText("ZARA COAT 3")).toBeVisible()//verifying Zara coat 3 is available in my cart page
    await page.getByRole("button",{name:"Checkout"}).click()// clicking on checkout button

    // ---------- Below code is of  Payment page---------//
    await page.getByPlaceholder("Select Country").pressSequentially("ind") // entering Ind in select country drop down
    await page.getByRole("button",{name:"India"}).nth(1).click()// selecting india nth(1) because there are 2 suggesion with India
    await page.getByText("PLACE ORDER").click()// clicking on Placeorder using getByText
    await expect (page.getByText("Thankyou for the order.")).toBeVisible()//verifying Success message is available in my order confirmation page



//     await expect(payEmail).toHaveText(emailId)// added assertion on email field to verify if it is correct
//     await placeOrderbtn.click()// clicking on placeorder button
//     await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ") //located & added assertion on success message
//     const orderId = await page.locator(".content-wrap .em-spacer-1").nth(3).textContent() //located orderid & getting text of it
//     await console.log(orderId) // Printing order ID in console
// /////////////////////////////////////
//     await orderBtn.nth(1).click() // clicking on order btn.
//     await page.locator("tbody").waitFor() // Added wait so that the list of orderid loads inside the table
//     const rows = await page.locator("tbody tr") // locted the row of orderId fromYour orders page & saved in rows variable
    
//     for (let i = 0; i < await rows.count(); ++i) //applied for loop to iterate till the count of rows
//     {
//     const rowOrderId = await rows.nth(i).locator("th").textContent() //located only row list  & grabbing order id
//     if (orderId.includes(rowOrderId)) // added cond if the Order id matches with the order id we ordered
//     {
//     await rows.nth(i).locator("button").first().click() // ifmatches then click on view button  
//     break;
//     }
//     }
//     const orderIDdetails = await page.locator(".col-text").textContent()//Located & grabbed text of orderid from details page
//     await expect(orderId.includes(orderIDdetails)).toBeTruthy()//added assertion on orderid which we extracted in previous step with id of view page
   // await page.pause() // added pause
});





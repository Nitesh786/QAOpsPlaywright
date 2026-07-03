const {test,expect} = require ('@playwright/test');
test('Assignment',async({browser})=>
{
const context =  await browser.newContext ()
const page = await context.newPage()
const email = page.locator("#userEmail")
const password =  page.locator("input[type*=pass]")
const loginbtn = page.locator("input[name=login]")
const prodtitle = page.locator("div.card-body b")
const allItem = page.locator("div.card-body")
const buyItem = "ADIDAS ORIGINAL"
const cartBtn = page.locator("[routerlink*='cart']")
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await email.fill("m1@m1.com")
await password.fill("Test@123")
await loginbtn.click()
await page.waitForLoadState("networkidle")
//await prodtitle.first().waitFor()
const listitem = await prodtitle.allTextContents()
console.log(listitem)
const itemCount =   await allItem.count()
// Adding for loop for iterating over all the product & adding matched product to cart
for (let i = 0; i <itemCount; ++ i)
{
 if (await allItem.nth(i).locator("b").textContent() === buyItem)
 {
   await allItem.nth(i).locator("text= Add To Cart").click()
    break;
 }
 }
 await cartBtn.click() // clicking on add2cart button
 

});







const {test,expect} = require ('@playwright/test');

test('First playwright test' , async ({browser})=>
{
const context =  await  browser.newContext();
const page = await context.newPage();
const userName = page.locator('input#username') // created variable username & added locator inside it
const signIn = page.locator('input#signInBtn') // created variable signIn & added locator inside it
const cartProducts = page.locator("div.card-body a") //created variable cartProducts & added locator inside it
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title()) // Printing page title
 await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
 await userName.fill("rahulshetty") //  entering rahulshetty inside username 
 await page.locator('input#password').fill("Learning@830$3mK2")  // located password element & entering rahulshetty
 await signIn.click ()// clicking on signin button
 console.log(await page.locator("[style*='block;']").textContent()) // locating & grabbing error message & printing in console
 await expect(page.locator("[style*='block;']")).toContainText("Incorrect")
 await userName.fill("") //  clearing the entered text rahulshetty inside username 
 await userName.fill("rahulshettyacademy") //  entering text rahulshettyacademy again inside username 
 await signIn.click() // Clicking on signin button again
//  console.log(await cartProducts.first().textContent())// getting text of 1st product name out of 4
//  console.log(await cartProducts.nth(1).textContent())// getting text of 2nd product name out of 4
 const allTitles = await cartProducts.allTextContents() // getting text of all products & saving inside allTitles variable
 console.log(allTitles) // Printing in console all products title value
});
test ('Assignment',async({browser})=>
{
const context = await browser.newContext ()
const page=   await context.newPage()
const email = page.locator("input#userEmail") // located email element
const password = page.locator("[type='password']") // located password element
const login = page.locator("[type='submit']") // located Login button element
const product = page.locator("div.card-body b") // located products
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await email.fill("m1@m1.com") // Entering Email in EMail field
await password.fill("Test@123") // Entering password in password field
await login.click(); // clicking on login button
console.log(await product.first().textContent()) // getting text of 1st Product & printing in console 
});

test ('Page playwright test', async ({page}) =>
{
   await page.goto("https://www.google.com/");
   console.log(await page.title())  // Printing page title
   await expect(page).toHaveTitle("Google")
});
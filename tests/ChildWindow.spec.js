

const {test,expect} = require ('@playwright/test');

test('childWindow' , async ({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage() // now this is our base page where  we are getting blinking link
    const userName = page.locator('input#username') // created variable username & added locator inside it
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const docLink = page.locator("[href*='documents-request']") // located the blinking link in variable
const [Page1] = await Promise.all (
[context.waitForEvent("page"),// This method duty is to listen whether any page is getting opened in the background.
docLink.click(),// clicking on blinking link text
])

const text = await Page1.locator(".red").textContent() // Using variable Page1 getting text from child window
console.log(text) // Printing variable text value in console
// Fetching rahul shetty from the long text
const arrayText = text.split("@")  // using .split method & using @ to split from
const domain = arrayText[1].split(" ")[0] // from indexing 1 we are splitting by space & [0]Taking the first item from the array”
//console.log(domain) // Printing the domain name in Console
await page.locator("input#username").type(domain) // entering rahulshetty in username field using page object of parent window
console.log(await page.locator("input#username").inputValue()) // Grabbing text entered by Playwright at run time
});

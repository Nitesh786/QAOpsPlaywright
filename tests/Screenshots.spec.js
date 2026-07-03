const {test,expect} = require ('@playwright/test')

test("popup",async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// await page.goto("https://www.google.com/")
// await page.goBack()//To go back from google.com to rahulshetty by clicking on back button
// await page.goForward()// To go forwad again to Google by clicking on forwad button
await expect(page.locator("#displayed-text")).toBeVisible //located the text field & added assertion to check if is is visible
await page.locator("#hide-textbox").click()// clicking on hide button
await expect(page.locator("#displayed-text")).toBeHidden //located the text field & added assertion to check if it is hidden
await page.pause() //
page.on('dialog',dialog =>dialog.accept()) // to click  ok button of popup
//page.on('dialog',dialog => dialog.dismiss())// to click on cancel button

await page.locator("#confirmbtn").click()// clicking on Confirm button top open popup

await page.locator("#mousehover").hover()// .hover methodis used to do mouse hover
// Handling frames 
const framesPage = page.frameLocator("#courses-iframe")// switching to child frame
await framesPage.locator("li a[href*='lifetime-access']:visible").click()//clicking on all plans link 
const textCheck = await framesPage.locator(".text h2").textContent()// grabbing the text 
console.log(textCheck.split(" ")[1]) // spliting the text with space & 13522 fall in 1st index so printing the same in console

})
test("Screenshot ",async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// await page.goto("https://www.google.com/")
// await page.goBack()//To go back from google.com to rahulshetty by clicking on back button
// await page.goForward()// To go forwad again to Google by clicking on forwad button
await expect(page.locator("#displayed-text")).toBeVisible //located the text field & added assertion to check if is is visible
await page.locator("#displayed-text").screenshot({path:'partialshot.jpeg'})// taking screenshot of only text box
await page.locator("#hide-textbox").click()// clicking on hide button
await page.screenshot({path : 'screenshot.png'})
await expect(page.locator("#displayed-text")).toBeHidden //located the text field & added assertion to check if it is hidden
})

test("Rediff", async({page} )=>
{
await page.goto("https://www.flightaware.com/")
expect(await page.screenshot()).toMatchSnapshot('landingpage.png')
})
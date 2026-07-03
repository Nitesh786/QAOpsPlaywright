

const {test,expect} = require ('@playwright/test');

test('DropDown' , async ({browser})=>
{
const context =  await  browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title()) // Printing page title
//await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy") //Assertion to check webpage title matches:
const dropDown = page.locator("select.form-control") //created variable dropdown & added locator inside it
const docLink = page.locator("[href*='documents-request']") // located the blinking link in variable
 await dropDown.selectOption("consult") // selecting consult from drop down
 await page.locator(".radiotextsty").nth(1).click() // selecting User in radio button
//   await page.locator(".radiotextsty").last().click()  // selecting User in radio button
//  await page.locator("input[type='radio'][value='user']").click() // selecting User in radio button
await page.locator("button#okayBtn").click() // clicking on Pop up ok button
console.log(await page.locator(".radiotextsty").nth(1).isChecked()) // Using ischecked method to verify if User radio btn is selected
await expect (page.locator(".radiotextsty").nth(1)).toBeChecked() // Assertion to verify if USer radio button is selected
await page.locator("input#terms").click() // Selecting check box
await expect (page.locator("input#terms")).toBeChecked()// Adding Assertion to verify if checkbox  is selected.
await page.locator("input#terms").uncheck() // unchecking the selected checkbox of I agree terms
expect(await page.locator("input#terms").isChecked()).toBeFalsy()//Verify that the checkbox with id terms is NOT checked
await expect(docLink).toHaveAttribute("class","blinkingTextssss") // adding assertion .toHaveAttribute

//await page.pause() // this will pause the page & open instructor

});

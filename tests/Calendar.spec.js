const {test,expect} = require("@playwright/test")
test("Calendar Validation", async ({browser})=>
{
const context = await browser.newContext()
const page = await context.newPage()
const monthNumber = '6'
const date = '15'
const year = '2027'
const expectedYear = [monthNumber,date,year]// created an array of HTML response 
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
await page.locator(".react-date-picker__inputGroup").click()// Located & clicking on calendar
await page.locator(".react-calendar__navigation__label").click()//doing 1st click on month & year to open Year calendar
await page.locator(".react-calendar__navigation__label").click()//doing 2nd click on month & year to open Year calendar
await page.getByText(year).click()// Locating 2027 by getByText & passing our declared year variable.
await page.locator(".react-calendar__tile").nth(Number(monthNumber)-1).click()// clicking on June month
await page.locator("//abbr[text()='"+date+"']").click()// selecting date as 15

const inputs = await page.locator(".react-date-picker__inputGroup__input")// created common css & stored inside a variable

for (let i =0; i<expectedYear.length; ++ i) // Adding for loop to iterate till the length of array 
{
 const value = await inputs.nth(i).inputValue()//Grabbing value of inputvalue in every iteration
 expect(value).toEqual(expectedYear[i]) // comparing grabbed value with our expected array using assertion expect
}

})

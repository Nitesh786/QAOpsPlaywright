const { test, expect } = require('@playwright/test');
test('Angular', async ({ browser }) => {
  const context=  await browser.newContext ()
  const page = await context.newPage()
  await page.goto("https://rahulshettyacademy.com/angularpractice/")
  await page.getByLabel("Check me out if you Love IceCreams!").click()// clicking on checkbox using getBylabel locator
  await page.getByLabel("Employed").check() // selecting employed Radio button using getBylabel locator
  await page.getByLabel("Gender").selectOption("Female")// selecting Female from Gebder drop down using selectOption method
  //await page.getByPlaceholder("Password").fill("Test@123")//located password using getByPlaceholder() & entering password
  await page.getByLabel("Password").fill("Test@123")//located password using getByPlaceholder() & entering password
  await page.getByRole("button",{name:"Submit"}).click() // located submit button using getByRole & clicking on it
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible()//copied the success message from UI by getByText method
  await page.getByRole("link",{name: "Shop"}).click()//located shop link text & clicking on it
  await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button",{name:"Add"}).click()// Located all items in shop page & filtered with Nokia & click

  //await page.pause()
});





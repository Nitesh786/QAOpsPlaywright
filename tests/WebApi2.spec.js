const {test,expect,request} = require('@playwright/test')
const loginPayload = {userEmail: "m1@m1.com", userPassword: "Test@123"}
let token;
test.beforeAll(async() =>
{
const apiContext =await request.newContext()
const loginResponce =await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: loginPayload
    })
   expect(loginResponce.ok()).toBeTruthy()
  const loginResponceJson = await loginResponce.json()
  token = loginResponceJson.token
  console.log(token)
})

test.beforeEach(() =>
{

})

test('Api',async({browser})=>
{
const context = await browser.newContext()
const page = await context.newPage()
await page.addInitScript(value=>
    {
//window.localStorage.setItem('token',value)
window.sessionStorage.setItem('token',value)
    },token)

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
// await page.locator("input[type=email]").fill("m1@m1.com")
// await page.locator("#userPassword").fill("Test@123")
// await page.locator("#login").click()

await page.locator(".card-body").first().waitFor()
const productList = await page.locator(".card-body").allTextContents()
console.log(productList)
await page.locator("ul li").nth(2).click()
await page.pause()

}
)
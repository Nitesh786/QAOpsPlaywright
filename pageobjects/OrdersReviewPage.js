const {expect} = require("@playwright/test")
class OrdersReviewPage
{
constructor (page)
{
this.page = page
this.country = page.locator("[placeholder*='Country']")//located select country drop down
this.dropdown = page.locator("[class*='ta-results']")//located autosuggestion results of select country
this.emailId = page.locator("[class*='user'] [style*='color']")// located email id on Payment page for Assertion
this.submit = page.locator(".action__submit") // located Placeorder btn from cart page
this.orderConfirmationText = page.locator(".hero-primary")//located order Confirm text
this.orderIdDetails = page.locator(".em-spacer-1 .ng-star-inserted")//located orderID text from order confirm page
}
async searchCountryAndSelect(countryCode,countryName)
{
await this.country.type(countryCode,{delay:100})
await this.dropdown.waitFor()
const optionCount = await this.dropdown.locator("button").count()
for (let i=0; i<optionCount; i++)
{
const text = await this.dropdown.locator("button").nth(i).textContent()//iterating on 3 auto results & getting text one by one
        if (text === " India") // comparing india with all the results which is being fetch
        {
            await this.dropdown.locator("button").nth(i).click()
            break;
        }
}
}
async VerifyEmailId(username)
{
    await expect(this.emailId).toHaveText(username);
}

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderIdDetails.textContent();
}
}
module.exports = {OrdersReviewPage}
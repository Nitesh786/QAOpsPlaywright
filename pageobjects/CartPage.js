const { expect } = require("@playwright/test")
class CartPage
{
    constructor (page)
    {
        this.page = page
this.cartProducts = page.locator("div li").first()// located 1st product in cart page
this.productText = page.locator(".card-body b")// created a common css locator of all productsText in dashboard page for add to cart
this.cart = page.locator("[routerlink*='cart']")// located addtocart button on dashboard page
this.orders = page.locator("button[routerlink*='myorders']")//located orders button on dashboard page
this.checkOut = page.locator("text=Checkout")//located checkout button    

}
async VerifyProductIsDisplayed(productName)
{
await this.cartProducts.waitFor()
const bool = await this.getProductLocator(productName).isVisible()
expect(bool).toBeTruthy();
}

async Checkout()
{
    await this.checkOut.click()
}
 getProductLocator(productName)
{
    return this.page.locator("h3:has-text('"+productName+"')")
}
}
module.exports={CartPage}
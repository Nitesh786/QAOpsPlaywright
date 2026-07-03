class DashboardPage
{
constructor (page)
{
      this.page = page;
this.products = page.locator(".card-body") // created a common css locator of all products for add to cart
this.productsText = page.locator("div.card-body b")// located all products text
this.cart = page.locator("[routerlink*='cart']")//Cart button
this.orders = page.locator("button[routerlink*='myorders']");// my orders button
}
async searchProductAddCart (productName)
{
     const prodTextList = await this.productsText.allTextContents() // getting text of all Product & printing in console 
        console.log(prodTextList) // Printing all text items in console
        const productscount = await this.products.count() // getting total count of all the products
        for (let i = 0; i < productscount; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName)// if the product matches with this name
                {
                await this.products.nth(i).locator("text= Add To Cart").click()// click on add to cart button
                break;
            }
        }
}
async navigateToOrders()
{
    await this.orders.click();
}
async navigateToCart ()
{
    await this.cart.click()// clicking on cart button inside dashboard page
}
}
module.exports = {DashboardPage}
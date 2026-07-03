class OrderHistoryPage
{
constructor (page)
{
this.page = page
this.ordersTable = page.locator("tbody")// locted the full row of orderId from Your orders page & saved in ordersTable variable
this.rows = page.locator("tbody tr")//locted the row of orderId fromYour orders page & saved in rows variable
this.orderIdDetails=page.locator(".col-text")//Located & grabbed text of orderid from order history page
}
async searchOrderAndSelect(orderId)
{
    await this.ordersTable.waitFor()
    for (let i =0; i<await this.rows.count();i++)
    {
    const rowOrderId= await this.rows.nth(i).locator("th").textContent()
     if(orderId.includes(rowOrderId))
     {
      await this.rows.nth(i).locator("button").first().click()
      break
     }
    }
}
async getOrderId()
{
    return await this.orderIdDetails.textContent()
}
}
module.exports = {OrderHistoryPage}
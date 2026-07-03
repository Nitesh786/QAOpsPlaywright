const {LoginPage} = require('./LoginPage')
const {DashboardPage} = require('./DashboardPage')
const {CartPage} = require('./CartPage')
const{OrdersReviewPage} =require('./OrdersReviewPage')
const {OrderHistoryPage} =  require('./OrderHistoryPage')
class POManager 
{
    constructor (page)
{       this.page = page// created local variable of the page
        this.loginPage =  new LoginPage(this.page)//created object of loginpage class
        this.dashboardPage = new DashboardPage(this.page)// created object of DashboardPage & passed parameter of page
        this.cartPage = new CartPage(this.page)//created object of Cartpage class
        this.ordersReviewPage = new OrdersReviewPage(this.page)//created object of OrdersReviewPage 
       this.orderHistoryPage = new OrderHistoryPage(this.page)//created object of OrderHistoryPage 
    }
getloginPage ()// created getLoginPage special method
{
    return this.loginPage // returning the 
}

getdashboardPage () // created getdashboardPage special method of cart page
{
    return this.dashboardPage
}

getcartPage()// created getCartPage special method of cart page
{
    return this.cartPage
}
getordersReviewPage()
{
    return this.ordersReviewPage
}
getorderHistoryPage()
{
return this.orderHistoryPage
}
}
module.exports = {POManager}
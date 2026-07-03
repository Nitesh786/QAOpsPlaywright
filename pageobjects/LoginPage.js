class LoginPage
{
constructor (page)
{
    this.page = page
    this.signInbutton = page.locator("[type='submit']")// located Login button element
    this.userName = page.locator("input#userEmail")// located email element
    this.password = page.locator("[type='password']") // located password element
    
}
async goTo() //created method of hitting url
{
await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")// hitting url
}
async validlogin (username,password)// created method for login code 
{
    await this.userName.type(username)// enterign username
    await this.password.type(password)// entering password
    await this.signInbutton.click()//clicking on signin button
    await this.page.waitForLoadState('networkidle') // method used to load all the api after login
}
} 
module.exports= {LoginPage}
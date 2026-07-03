class Apiutils
{
    constructor (apiContext,loginPayload)
    {
    this.apiContext = apiContext // created instance variable so that it can be accessed in current class.
    this.loginPayload = loginPayload
    }

async getToken ()
{
const loginResponce = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:this.loginPayload
    })
   const loginResponceJson =  await loginResponce.json()
   token = loginResponceJson.token
   console.log(token)
   return token;
}
async createOrder (orderPayload)
{
     //Create order API
  const orderResponce = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
     data: orderPayload,
     headers : 
     {
     'authorization' : this.getToken(),
     'content-type' : 'application/json'
     },
    
    }) 
     const orderResponceJson =  await orderResponce.json()
     console.log(orderResponceJson) // printing responce in console
     orderId = orderResponceJson.orders[0]
     return orderId

    }
}
module.exports = {Apiutils}


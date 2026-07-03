const base  = require('@playwright/test');
exports.customtest = base.test.extend(
{
testDataForOrder : 
{
 username : "m1@m1.com",   
 password : "Test@123",
 productName : "ZARA COAT 3"
}
}
)
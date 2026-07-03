Feature: Ecommerce validations
@Validation
Scenario Outline: Placing the order
Given : a login to Ecommerce2 application with "<username>" and "<password>"
Then verify error message is displayed


Examples:
| username         | password   |
|anshika@gmail.com | Iamking    |
|hello@123.com     | Iamhello@12|
   





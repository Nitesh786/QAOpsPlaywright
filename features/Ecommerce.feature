Feature: Ecommerce validations
@Regression
Scenario: Placing the order
Given : a login to Ecommerce application with "m1@m1.com" and "Test@123"
When Add "ZARA COAT 3" added to cart
Then verify "ZARA COAT 3333" is displayed in cart
When Enter valid details  and place the order
Then Verify order if present in  the orderHistory


@Validation
Scenario Outline: Placing the order
Given : a login to Ecommerce2 application with "<username>" and "<password>"
Then verify error message is displayed
Examples:
| username         | password   |
|anshika@gmail.com | Iamking    |
|hello@123.com     | Iamhello@12|
   
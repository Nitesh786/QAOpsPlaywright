const {test, expect} = require('@playwright/test')
test('Assignment9',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage()
// *******************STEP 1********************
const eventTitle = `Test Event ${Date.now()}`
await page.goto("https://eventhub.rahulshettyacademy.com/login")
await page.getByPlaceholder("you@email.com").fill("m@m.com") // entering emailid
await page.getByLabel("Password").fill("Test@123")// entering password
await page.locator("#login-btn").click()// clicking on signin button
await expect(page.getByText("Browse Events →")).toBeVisible()// located Browse event & added assertion
// *******************STEP 2********************
await page.locator("div[class='relative']").click() // clicking on Admin
await page.locator("div[class='relative'] a").nth(0).click() // clickingon events
await page.getByPlaceholder("Event title").fill(eventTitle) // located title & passing value of eventTitle
await page.locator("form[id='admin-event-form'] textarea[placeholder='Describe the event…']").fill("text")// located description
await page.getByLabel("City").fill("Mumbai")// located mumbai
await page.getByLabel("Venue").fill("Bandra")// located Venue
await page.getByLabel("Event Date & Time").click() // clicking on calendar
await page.getByLabel("Event Date & Time").fill("2033-01-01T07:00") // entering value in calendar
await page.getByLabel("Price ($)").fill("151") // llocated dollar & entering value as 50
await page.getByLabel("Total Seats").fill("21")// located seats 50
await page.locator("#add-event-btn").click()// clickinf on addevent btn
await page.getByText("//p[text()=Event created!]").isVisible() // located even created toast message & added isvisible method
await console.log(eventTitle)
// *******************STEP 3********************
await page.locator("#nav-events").click() // navigating to events
const eventCard = await page.getByTestId("event-card") //located all cards
await expect(eventCard.first()).toBeVisible()// adding assertion if 1st event card is visible this confirms if all events are loaded
const targetCard = await eventCard.filter({hasText: eventTitle}).first()//From all cards, filtered for the one that contain event title text 
await expect(targetCard).toBeVisible({timeout:5000})//added assertion & checked if our required card in visible.
const seatsBeforeBooking = parseInt (await targetCard.getByText("Seats").first().innerText())//Read the seat count text from that card 
console.log(seatsBeforeBooking)// printing the seat in console
// *******************STEP 4********************
await targetCard.getByTestId("book-now-btn").click()// clicking on buy button
// *******************STEP 5********************
const ticketCount = await page.locator("#ticket-count") // located 1 text in ticket
await expect(ticketCount).toHaveText('1')// Added assertion if it has text as 1
await page.getByLabel("Full Name").fill("Nitesh Naik")// entering name in ticket
await page.locator("#customer-email").fill("m@m.com")// entering email in ticket
await page.getByPlaceholder("+91 98765 43210").fill("9012345678")// entering number in ticket
await page.locator(".confirm-booking-btn").click()// Clicking on confirm btn
// *******************STEP 6 Booking Confirmed! ********************
const bookingRefEl = await page.locator(".booking-ref")// located booking reference number from Booking Confirmed page
await expect(bookingRefEl).toBeVisible()// assed assert if booking reference is visible

//T-RDQXK4
const bookingRef = await bookingRefEl.innerText()//Getting text of Reference number & storing inside Variable bookingRef
expect(bookingRef.charAt(0)).toBe(eventTitle.trim().charAt(0).toUpperCase());// comparing  1st character of i.e bookingRef & eventtitle i.e T 
//expect(await bookingRef.charAt(0)).toBe(eventTitle.charAt(0)) -- you can use this syntax as well because trim & uppercase is not required
// *******************STEP 7 Verify in My Bookings! ********************
await page.getByRole('link',{name:'View My Bookings'}).click()// clicking on View my bookings button
await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')//Added assertion to check if url is correct
const bookingCards = await page.locator("#booking-card")// located all booking cards
await expect ((bookingCards).first()).toBeVisible()//Verifying if 1st booking card is visible
const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });//filtered booking card  
await expect((matchingCard).first()).toBeVisible();
 console.log(`Booking card found in My Bookings for ref: ${bookingRef}`);

// *******************STEP 8 Verify seat reduction ********************
await page.getByRole('link',{name:'Events'}).first().click()// clicking on events
await expect(eventCard.first()).toBeVisible()//Assertion added to check if 1st card is visible
const updatedCard =   eventCard.filter({hasText: eventTitle}).first()// Filtered cards using hasText
await expect (updatedCard).toBeVisible() // added assertion  Assert the card is visible
const seatsAfterBooking = await parseInt(updatedCard.getByText("Seats").first().innerText())//Read the seat count text store as seatsAfterBooking
  console.log(`Seats after booking: ${seatsAfterBooking}`);



await page.pause()

})
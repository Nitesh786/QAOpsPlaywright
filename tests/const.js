class person
{
age = 25 //Defining age property inside class
firstname = 'Nitesh' //Defining firstname property inside class
get location () // creating property by getter method
{
return 'canada'
}
constructor (car,speed) // PArameter of constructor
{
this.car = car // this is instance variable,  syntax to add property inside Constructor
this.speed = speed // this is instance variable, syntax to add property inside Constructor
}
vehicle () // created vehicle method
{
return console.log(this.car + this.speed) // using constructor property inside the vehicle method
}

}
let p1 = new person ("bmw","200") //creating object of class & passing value to the constructor 
let p2 = new person ("Mercedes", "240") // creating another object of class & passing new value to the constructor
p1.vehicle() // calling vehicle method using p1 object
p2.vehicle() // calling vehicle method using p2 object
console.log(p1.location) // calling location property
console.log(p1.age)
console.log(p1.firstname)
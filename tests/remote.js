const person = require("./car.js")
class control extends person
{
constructor (car,speed) // Created same Parent class constructor in child class
{

super(car,speed) // calling parent consturctor using super keyword
}

}

let c1 = new control ("Seltos", "180") // created object of child class & passing values to constructor
c1.vehicle() // calling vehicle method of Parent class
console.log(c1.location) // calling  property of parent class & printing location method in console
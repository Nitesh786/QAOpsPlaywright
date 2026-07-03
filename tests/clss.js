class person
{
age = 25 //Defining age property inside class
firstname = 'Nitesh' //Defining firstname property inside class
get location () // creating property by getter method
{
return 'canada'
}
}

let p1 = new person ()
console.log(p1.location) // calling location property
console.log(p1.age)
console.log(p1.firstname)
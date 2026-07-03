let person =
{
    firstname : "Nitesh",
    lastname : "Naik",
    age : 12
}
person.firstname
console.log(person.firstname)
console.log(person.age)
console.log(person['lastname'])
console.log(person['age'])
person.firstname = "Harish" // Reassigning value to Key firstname
console.log(person.firstname)
person.address = ("Thane") // Adding property at runtime
console.log(person)
delete person.address // deleting property address at run time
console.log(person)
console.log('gender' in person) // checking if Gender property exist in Object person & printing in console

// Printing the Property key & value of object Person using FOR Loop
for (key in person)
{
    console.log(key,person[key])
}

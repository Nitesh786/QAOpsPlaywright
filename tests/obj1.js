let person =
{
    firstname : 'Nitesh',
    lastname : 'Naik',
    age : '35',
 fullname : function () // Creating anonmous function
 {
    console.log(this.firstname + this.lastname) // Concating firstname & lastname using this keyword
 }
}
person.fullname() //This line is calling (running/executing) the fullname function inside the person object.
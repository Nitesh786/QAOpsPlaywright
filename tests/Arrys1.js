// var score = [12, 13 , 14, 16]
// var evenScores = [] // created new array to add even values 
// for (let i = 0; i <score.length; i++) // added for loop to iterate over array
// {
// if (score [i] % 2 == 0)  // added if cond to check if number is divisible by 2 & remainder is 0
// {
// evenScores.push(score[i])  // step to add even numbers  in new Array
// }
// }
// console.log(evenScores)  // finally printing all the values inside the new Array

var score = [12,13,14,16] // created array

evenScore= score.filter(tempNum => tempNum % 2== 0)

console.log(evenScore)
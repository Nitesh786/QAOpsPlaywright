var score = [12,13,14,16]
var newscore=  score.map(m1=>m1*3) // used map function to perform multiplication
console.log(newscore) // OP is [ 36, 39, 42, 48 ]
// adding operatin using.reduce function
var addition=  newscore.reduce((sum,add) => sum+add,0) // using .reduce function to add all values[ 36, 39, 42, 48 ]
console.log(addition)
let day = 'tuesday '
console.log(day.length)
 let day1 = day.trim()
console.log(day1.length)

console.log("Convert the string to Array")

let toDate = "26"
let fromDate = '19'
let difference = parseInt(toDate-fromDate)
console.log(difference)
difference.toString()
console.log(difference)

let n1 = "tuesday"
let n2 = "funday"

let n3 = n1 + n2
console.log(n3)

let find = n3.indexOf("day")
let count = 0

console.log(find)

while (find !== -1)
{
    count++

    find = n3.indexOf("day", find + 1)
}

console.log(count)
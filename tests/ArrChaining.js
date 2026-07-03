var age = [12,13,14,16]
ageTotal =  age.filter(evenage=>evenage%2==0).map(multage=>multage*3).reduce((sum,value)=>sum+value,0)
console.log(ageTotal)
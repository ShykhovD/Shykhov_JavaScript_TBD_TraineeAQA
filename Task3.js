const nuberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 function third(value) {
     if (value %3 === 0) 
     return value
 }
 const numberArray2 = nuberArray1.filter(third)
 console.log(numberArray2)

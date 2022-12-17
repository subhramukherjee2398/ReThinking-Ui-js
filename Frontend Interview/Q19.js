// splice vs slice

//1

/* 
   splice and slice both are use to remove elements from the array but
   
   splice  modify the original array
   
*/

 let a1 = [1,2,3,4,5]

console.log(a1.splice(2)) //  [3, 4, 5]
console.log(a1) // [1, 2]

let a2 = [1,2,3,4,5]

console.log(a2.slice(2)) //  [3, 4, 5]
console.log(a2) // [1,2,3,4,5]


//2

/*
  slice has two argument ( start index , last index)

  splice has n argumnent (start index , numbers of items have to remove , items to add ( ........itesm))

*/

let a3 = [1,2,3,4,5]

console.log(a3.splice(2,2,5000)) //  [3, 4]
console.log(a3) //  [1, 2, 5000, 5]

//3 

/*
  in SPlice if Nan is giving as  1st parameter it will treat as 0;
*/

let a4 = [1,2,3,4,5]

console.log(a4.splice(NaN,2,'xxx')) //  [1, 2]
console.log(a4) //  ['xxx', 3, 4, 5]

//4

/*
  in splice if 1st argument is greater than array length it will take last index

*/

let a5 = [1,2,3,4,5]

console.log(a5.splice(55,2,'xox')) //  [] ( Nothing remove , here 55 > array length so 1st index will be last index = 4)
console.log(a5) //  [1, 2, 3, 4, 5, 'xox']

console.log(['1','2','3'].map(parseInt)) // [1,Nan,Nan]

// answer : 

/*

 parseInt has two parameter (string,radix) // default radix is 0 or decimal
 map has three parameter (ele,index,array) // default (ele,index)


  so ,

  1st iteration parseInt('1',0) => 1
  2nd iteration parseInt('2',1) => Nan
  3rd iteration parseInt('3',2) => Nan


*/

// how to solve
const returnString  = (ele,index) => parseInt(ele)
console.log(['1','2','3'].map(returnString)) // [1, 2, 3]
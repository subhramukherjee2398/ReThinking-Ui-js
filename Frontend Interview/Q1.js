
//case : 1
var add;

function add(){

}

console.log(typeof add); //  function....

// variable is overriding by function 


//case : 2

function add1(){

}

var add1;

console.log(typeof add1)// function....

/** 
 * because function has the more preference over variable
 */

//case : 3

function add2(){

}

var add2 = 10;

console.log(typeof add2) // number 

//because variable assign has the more preference.

//case : 4

function add3(){

}

let add3 = 10;

console.log(typeof add2) // error
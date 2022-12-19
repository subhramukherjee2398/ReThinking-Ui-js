const test = () => {
  console.log("hello");
};

//Q1
console.log(test.length);

// function.length returns the number of the parameter.

const test2 = (a, b, c) => {
  console.log("hello");
};

//Q2
console.log(test2.length);

const test3 = (a, b = 2) => {
  console.log("hello");
};

//Q3
console.log(test3.length);

const test4 = (a, b, ...c) => {
  console.log("hello");
};

//Q4
console.log(test4.length);

//Q5

console.log((123)["toString"].length + 123);

//sol :

// default toString(10) => toString(10)

/**
 * so, 123['tostring'].length (it is a function ) => 1 //(toString(10))
 * 1+123 = 124
 *
 */

//Q6

console.log((123)["toString"]().length + 123);

//sol : 123.['toString']() => as here function is called so => '123'
//'123'.lenth  = 3 + 123 => 126

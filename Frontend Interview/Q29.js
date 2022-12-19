// difference between typeof and instance of==

let a = "string example";
let b = new String("string example");

/**
 * type of is unary operaor it returns type of the variable
 * instance of a boolean opertor; it returns  true or false
 */

typeof a; // string
a instanceof String; // false ( beacuse string is a constructor function but here a is normal string)

typeof b; // object
b instanceof String; // true (beacuse b is ceated with string constructor function)

//instance of doesnot work with prmitive type

// Q : make a function that will check primitive type and constructor type together..

const isString = (str) => {
  return typeof str == "string" || str instanceof String;
};

console.log(isString("hello"));
console.log(isString(new String("hello")));

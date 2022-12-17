// flatten array

const arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]];



const flatten = (array) => {

 const new_array = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      new_array.push(...flatten(element));  // ...[6,7] => 6,7 
    } else {
      new_array.push(element);
    }
  });
  return new_array;
};

console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
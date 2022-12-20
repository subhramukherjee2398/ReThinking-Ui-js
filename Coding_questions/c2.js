// Array Rotation JavaScript Coding Challenge

function RoateK(a, l, k) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  return a;
}

function AnotheroateK(a, l, k) {
  let deletedArray = a.splice(l - k);
  console.log(deletedArray);
  for (let i = 0; i < deletedArray.length; i++) {
    a.splice(i, 0, deletedArray[i]);
  }
  return a;
}

let a = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(RoateK(a, a.length, k)); // [5, 6, 7, 1, 2, 3, 4]
console.log(AnotheroateK(a, a.length, k)); // [5, 6, 7, 1, 2, 3, 4]

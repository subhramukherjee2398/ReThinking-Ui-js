// Coding the FizzBuzz

/* console.time("Long solution");
for (let i = 0; i < 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  }
}
console.timeEnd("Long solution"); */

console.time("short solution");
for (let i = 0; i < 100; i++) {
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
}
console.timeEnd("short solution");

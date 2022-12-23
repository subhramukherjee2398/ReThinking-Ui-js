// Understanding Memoization In JavaScript?

function add(a, b) {
  return a + b;
}

// generate unique key

const popNameFromArgs = (function_name, arguments) => {
  let popKey = [];
  popKey = popKey.concat(function_name.name, arguments); // ['add',10,20]
  return popKey.join("|");
  // "add|10|20"
};

// function  decide call or return the cache

const Memoization = (additionFunction) => {
  //HOF function

  const memoryCache = {}; // {key : value} {"addition|10|20 : 30"}

  return function (...args) {
    const popName = popNameFromArgs(additionFunction, args);
    if (!memoryCache[popName]) {
      // not available call the function and save in memory
      memoryCache[popName] = additionFunction(...args);
    } else {
      console.log("return from cache");
    }
    return memoryCache[popName];
  };
};

const memoRization = Memoization(add);

console.log(memoRization(10, 20));
console.log(memoRization(100, 200));

console.log(memoRization(10, 20));
console.log(memoRization(100,200))

//add(10, 20); // 30

// after some line of code

//add(10, 20); // => implement memorization so that it can take 30 from cache

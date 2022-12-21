// Understanding Memoization In JavaScript?

function add(a, b) {
  return a + b;
}

// generate unique key

const popNameFromArgs = (function_name, arguments) => {
  let popKey = [];
  popkey = popKey.concat(function_name.name, args); // ['add',10,20]
  popKey.join("|"); // "add|10|20"
};

// function  decide call or return the cache

const Memoization = (additionFunction) => {
  //HOF function

  const memoryCache = {}; // {key : value} {"addition|10|20 : 30"}

  return function (...args) {
    const popName = popNameFromArgs(additionFunction, args);
    if (!memoryCache[popName]) {
      // not available call the function and save in memory
      memoryCache[popName] =   add(...args);
    } else {
      console.log("return from cache");
    }
  };
};

add(10, 20); // 30

// after some line of code

add(10, 20); // => implement memorization so that it can take 30 from cache

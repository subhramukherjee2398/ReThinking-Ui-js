// Difference Between Promise.all, Promise.allSettled, Promise.any, Promise.race

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

/* Promise.all  */

Promise.all([promise1, promise2, promise3]).then((response) => {
  console.log(response); // [3, 42, 'foo']
});

// Need to pass an array of promises.If all promises resolev then we will get a response.
// Response will be the array of resolve output but order will not be sequential( that means which promise excuited first)
// if any promise reject then all promise execution will stop and gives the error response

/* Promise.allsettled */

const promise4 = Promise.resolve(3);
const promise5 = 42;
const promise6 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});

Promise.allSettled([promise4, promise5, promise6]).then((response) => {
  console.log(response);

  /* [
    {
        "status": "fulfilled",
        "value": 3
    },
    {
        "status": "fulfilled",
        "value": 42
    },
    {
        "status": "rejected",
        "reason": "foo"
    }
] */
});

// works same as promise all but it will work on each promises and gives an array of object with status and value.
// gives status of resolve and rejected both;

// Promise.any

const promise7 = Promise.reject(3);
const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "quick");
});
const promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 700, "slow");
});

Promise.any([promise7, promise8, promise9]).then((response) => {
  console.log(response);
  // quick
});

// it will only work on resolve
// gives the only output value of the first or quick resolve promise value

//Promise.race

const promise10 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "quick");
});
const promise11 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "quick");
});
const promise12 = new Promise((resolve, reject) => {
  setTimeout(resolve, 700, "slow");
});

Promise.race([promise10, promise11, promise12]).then((response) => {
  console.log(response); // Uncaught (in promise) quick
});

// it work same as any ,but race also work with reject
// it doesnot bother with resolve or reject,it only return the first excuted promises derespect of resolve and reject

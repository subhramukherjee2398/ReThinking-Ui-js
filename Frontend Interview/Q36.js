//Difference Between callback Promises Async/Await in JavaScript |

// 1st : 3 example of sync codes

/* function one(){
    console.log(1)
}

function two(){
    console.log(2)
}

function three(){
    console.log(3)
}

one()
two()
three() */

// 2nd : 3 example of async codes

/* function one() {
  console.log(1);
}

function two() {
  setTimeout(() => {
    console.log(2);
  }, 0);
}

function three() {
  console.log(3);
}

one();
two();
three();
 */

// 3rd : make the require that after 2nd function excuted three will call

/* function one() {
  console.log(1);
}

function two(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 0);
}

function three() {
  console.log(3);
}

one();
two(three); */

//callback hell :

function hell() {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
      }, 2000);
    }, 1000);
  }, 500);
}

hell();

// disadvantage : there is no error handling and return the response to one callback to another callback is difficult

//solve it with promises:

// 4th : declare promise :

let promise1 = new Promise((resolve, reject) => {});

console.log(promise1); // Promise {<pending>}

let promise2 = new Promise((resolve, reject) => {
  resolve("it is resolve");
});

console.log(promise2); // Promise {<fulfilled>: 'it is resolve'}

// connect with promise:

promise2.then((response) => console.log(response));

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("it is solve");
  }, 1000);
});

promise3.then((response) => console.log(response));

// chain in promise

promise2
  .then((firestResponse) => {
    console.log(firestResponse, "1");
    return firestResponse;
  })
  .then((secondResponse) => {
    console.log(secondResponse, "2");
  });

// advantage : it is how promise is better for sending respoinses than callbacks

// handle both success and failed cases :

function test(onsucess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onsucess) {
        resolve([
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 3, name: "C" },
        ]);
      } else {
        reject("sorry to fetch the data");
      }
    }, 1000);
  });
}

test(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));

// async and await

// async and await is not a new thing , async and await aslo use promise
// but by using async and await we can write our promise in simple format.

// example :

// handling api call with promises :

function getUser() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.warn(err));
}

getUser();

// handling api call with aysnc and await:

const getAllUser = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        // it will wait here util the response get ( that means promise doesnot solve)
        let data = await res.json();
        console.log("async", data);
    }catch{
        console.warn('error')
    }
};

getAllUser();

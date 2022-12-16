
//ex: 1

let newList = [1, 2, 3, 4].push(5);
/* console.log(newList.push(6)); */ // error

// push returns length of the array so...newList will be -> 4
// then 4.puhs(6) => error

//ex: 2

const nums = [1, 2, 3, 4]

let [y] = nums;
let [...x] = nums;
console.log(y)
console.log(x)


// ex: 3

function call() {
    return this.str; // (window.str)
}



var str = 'g' // (window.str)
let obj = {
    str: 'o'
}

console.log(call())
console.log(call.call(obj))


//ex : 4


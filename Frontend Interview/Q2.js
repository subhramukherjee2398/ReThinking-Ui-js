
// In vs hasOwnproperty

// ans :

// both check a property is present or not in Object

// case : 1

let obj = {
    a : 1
}

console.log('a' in obj); // T
console.log('b' in obj); // F

console.log(obj.hasOwnProperty('a')) // T
console.log(obj.hasOwnProperty('b')) // F


//case : 2

// In supports inherit methods of object but hasOwnProperty does'nt support it.

// true
console.log('constructor' in obj)
console.log('__proto__' in obj)
console.log('hasOwnProperty' in obj)

// false
console.log(obj.hasOwnProperty('constructor'))


//case : 3

// in support getter and setter methods

class Aclass{
    get dataA(){
        return 42;
    }
}

class Bclass extends Aclass{
    get dataB(){
        return 42;
    }
}

const A1 = new Aclass;
const B1 = new Bclass;

// true
console.log('dataA' in A1);
console.log('dataB' in B1);
console.log('dataA' in B1);

// false 

// for all hasOwnproperty


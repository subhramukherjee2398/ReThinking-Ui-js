
// Ways to Check if a Key Exists in an Object in JavaScript

const User = {
    name : 'Subhra'
}

//1. check for undefined 
console.log(User['name'] === undefined)

//2. hasOwnProperty

console.log(User.hasOwnProperty('name'));

//3. hasOwn (es2022 update)

console.log(Object.hasOwn(User,'name'))

//4. in 

console.log('name' in User)
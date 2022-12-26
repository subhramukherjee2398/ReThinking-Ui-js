
//Q

let arr = [1 , 2 , 'a' , true , 5 , 'c'];

//Q1 . Delets a element at a particular position

arr.splice(2,1); // [1, 2, true, 5, 'c']

console.log(arr)

//Q2. what is the output

let a = [1 , 2 , 3 , 4 ];

console.log(a.splice(2,1)) 

// [3] // deleted element of the array


//Q3. deleteing element with a particular value

let arr2 = [1 , 2 , 'a' , true , 5 , 'c'];
let index = arr2.indexOf(5)
arr2.splice(index,1);
console.log(arr2) // [1, 2, 'a', true, 'c']

// Q4. deleteing All the element with a particular value

let arr3 = [1 , 2 , 'a' , true , 5 , 'a'];

const RemoveAll = (arr,ele) =>{
   
    // taking i from last because when we perform a delete operation from array ; array do rearranging operation
    // so it instead of looping from first to last it is better take it from last because it has the better performance

    for(let i = arr.length - 1 ; i>= 0 ; i--){
        if(arr[i] === ele){
            arr.splice(i,1)
        }
    }
}

RemoveAll(arr3,'a')

console.log(arr3) //[1, 2, true, 5]

//Q5 . 



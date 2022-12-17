
// cout occurances of element

let arr  = [1,2,2,5,9,9,7,1,3,9,7]

let count = {}

arr.forEach((ele)=>{
    if(count[ele]){
        count[ele] = count[ele] + 1
    }
    else {
        count[ele] = 1;
    }
})

console.log(count)
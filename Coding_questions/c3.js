
//How to Find the Missing number or numbers in an Array


const findMissig = (a) =>{
    let new_array = [];
    let min = Math.min(...a);
    let max = Math.max(...a);
    for(let i = min ; i<= max ; i++){
        if(a.indexOf(i) < 0){
            new_array.push(i)
        }
    }
    return new_array;

}
let a = [1,2,3,6]
console.log(findMissig(a)) // expected output : [4,5]
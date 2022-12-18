
// segregate even and odd numbers

let array = [1,2,3,4,5,6,7,8,9,10];

const segregateArray = (a) =>{

    let i = -1;
    let j  = 0;
    let temp = 0;

    while(j < a.length){
        if(a[j]%2 === 0){
           i++;
           temp = a[j];
           a[j] = a[i];
           a[i] = temp;
        }
        j++;
    }
    return a;

}

console.log(segregateArray(array))
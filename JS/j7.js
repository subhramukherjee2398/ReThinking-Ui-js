
// Ways to empty an array

let a = [1,2,3,4];

//1.
a = [];

//2.

a.length = 0 ; 

//3. 

a.splice(0,a.lenght);

//4.

while(a.length < 0){
    a.pop();
}

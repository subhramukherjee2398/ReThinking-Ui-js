

// how to check  n umber is even or not not using moodule

//sol : 

function isEven(n){
    if(parseInt(n/2)*2 == n){
        console.log('even')
    }
    else{
        console.log('odd')
    }
}

isEven(5)

//sol 2 :

function isEven(n){
    if(n&1){
        console.log('odd')
    }
    else{
        console.log('even')
    }
}

isEven(10)
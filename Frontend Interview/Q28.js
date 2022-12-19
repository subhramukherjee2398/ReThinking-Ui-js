

// make the condition true == 

/*  if(a == 1 && a == 2 && a== 3 ){
    console.log(true)
 } */

/**
 * answer : 
 * when we do == then js call valueOf function ,so the solution would be overwrite the value of function
 */

const a  = {
    num : 1
}

a.valueOf = function(){
    return this.num++;
}

if(a == 1 && a == 2 && a == 3 ){
    alert('hello')
 }


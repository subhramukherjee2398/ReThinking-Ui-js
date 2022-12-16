
//ex : 1
const test  = () => {
  try{
    return 1;
  }
  catch {
    return 0;
  }
  finally {
    console.log('finally');
    return 3;
  }
}

console.log(test()) // finally 3

//ex : 2

function duplicate(a,b,a){
    console.log(a,b,a);
}

duplicate(1,2,3);  // 3 2 3

// sol :because internally

/**
 * a = 1 ;
 * b  = 2;
 * a = 3;
 */
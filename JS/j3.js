
// Regeular function vs Arrow function

//1. syntax difference
//2. Argument binding


 function PrintArgu(){
    console.log(arguments)
 }

 PrintArgu(1,2,3) // 1,2,3

 const Print =  () =>{
    console.log(arguments)
 }

 Print(1,2,3,4) // arguments is not defined

 //3. Using new Keyword
 //4 . Duplicate Parameter

 // function func(x,x) =>{} // this is allowed
 //but,
 // const function  = (x,x) =>{} // this is not allowed

 //5. This keyowrd.
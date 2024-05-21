//<----------- Immediatly Invoked Function Expressions(IIFE)------>

//1.Immediatly execution of function
//2. Prevent polluting  local scope variable  from globel scope variable

//3.when we write two IIFE function one after one then first IIFE function should be ends with semicolon(;) so no error occurs during execution of second IIFE function.



/*

(function chai(){
    // nemed IIFE
    console.log("DB CONNECTED");
})();


//1.({}) function definition
//2.() calling the function

*/

((name)=>{
    //un-named IIFE
    console.log(`chal bhai chal ${name}`)
})("hem");

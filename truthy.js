"use strict"; // treat all js code as newer version
// alert(3+3)  // we are using nodejs not browser
/*
//number => 2 to power 53
//bigint
//string
//boolean
//null=>standalone value  (type of null is object)
//undefined=>value is not assigned (type of undefined is undefined)
//symbol =>unique
// object
*/
 

const userEmail="hem@gmail.com" // here we assume value is true
/*
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}
*/
/*
Falsy Values------------------>

false,0,-0,BigInt 0n,"",null,undefined,NaN

Truthy Value---------------------->

"0","false"," ",[],{},function(){}

*/

const emptyObj={}

if(Object.keys(emptyObj).length===0){
  //  console.log("object is empty");
}


// Nullish coalescing operator(??)-----------------> (null,undefined)

let val1;
//val1=5??10          (output-5)
//val1=null??10      (output-10)
//val1=undefined??15   (output-15)
//val1=null??10??15       (output-10)

//console.log(val1);






/* 

Based on "how data resides on memory and how it is accessed" ,
there are two type of datatype--->

1.Primitive(call by value) // changes on copy of these datatype.

(String,Number,Boolean,null,BigInt,undefined,symbol )

2.non-primitive(referenc-type)  // directly allocated the reference of these datatypt in memory 

(Arrays,Objects,Functions)


*/



/* 

Javascript is dynamically typed language

*/

/*
symbols------------>

const id=Symbol("123")
const anotherId=Symbol("123") // unique value of each variable even argument is same
console.log(id===anotherId) //false 

*/

// Array,Object,Function----->(return type of all --->object also known as function object)

const heros=["saktiman","nagraj","vikral","krish"]
let obj={
    name:"hem",
    age:21
}

const myFunction=function(){
    console.log("hello world!")
}

/*
Return type of all datatypes-->


String-->string
Boolean-->Boolean
Number-->Number
null-->Object
undefined-->undefined
Array-->object
function-->function object
Object-->object
*/



// let ,var ,const-------------->

var c=300

if(true){
    let a=10
    const b=20
   var  c=30
}



//console.log(a);  // error
//console.log(b);  //error
//console.log(c); // 30 


//------------------------------------------>


let a=300  // global Scope

if(true){
    //Local Scope
    let a=10
    const b=20
   // console.log("inner:",a);

}

//console.log(a);  
//console.log(b);


// In a windows and Node ,the global scope is different .
  
//<----------------------------------------------------------------------

//Nested scope------>

// In a nested function child function can access the all variable of parent function called a closer


function one(){
    const username="hem"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

   // two()
}
 
one()


//++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++

         //<------Hoisting----->

// function declairation---> no error

console.log(addOne(5));
function addOne(num){
     return (num+1)
}



// Expression function--->
// variable holding function declairation ----> error occures

console.log(addTwo(5));
const addTwo=function(num){
    return num+2
}


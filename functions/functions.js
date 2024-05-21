// function definition
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("M");
}


//sayMyName  // reference of function

//sayMyName()   // execution of function



// add two numbers--->

function addTwonum(num1,num2){
   //console.log(num1+num2);
   return (num1+num2)
}

 const result=addTwonum(4,5)     // function with argument
console.log(result);



function loginUser(username="sam"){
    if(username===undefined){
    console.log("please enter a user name");
    return 
    } 
    return` ${username} just logged in `
}

//console.log(loginUser("hem"))

console.log(loginUser())   //  if argument is not given value is undefined
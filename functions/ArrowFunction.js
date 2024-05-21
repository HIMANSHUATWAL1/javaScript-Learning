// this Keyword------> tells about  current context(value)

const user={
    username:"hem",
    price:999,
    welcome:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}

//user.welcome()
//user.username="sam"
//user.welcome()

//console.log(this); // {}  in node enviroment

// globel object of Browser---->Window





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

function chai(){
    let username="hem"
    console.log(this.username); // undefined 
}
chai()

*/


/*

const chai=()=>{
    let username="hem"
    console.log(this.username); // undefined
    console.log(this); // {}
}
chai()
*/

/* basic arrow function--->
// Explecit Arrow function--->
const addTwo=(num1,num2)=>{
    return num1+num2
  }


  console.log(addTwo(3,5));

  */

  /*
  // Implecit Return Arrow function-------->


  // in Curly Braces we have to write "return" keyword compulsory  but in Implecit Arrow function we do not have to write "return " keyword 

  const addTwo=(num1,num2)=>  (num1+num2)
  console.log(addTwo(3,5));
  
*/



// If we have to return Object in function----->

const addTwo=(num1,num2)=>  ({username:"hem"})

console.log(addTwo(3,5));

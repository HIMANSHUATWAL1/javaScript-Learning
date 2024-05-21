const newHero=["hulk","spiderman"]

// javascripts has prototypel behaviour 
// this ,classes, protype inheritance is provided by protype

// In javascript  function also a object .

function multiply(num){
    return num*5
}

//console.log(multiply(5));

//console.log(multiply.power=2);

//console.log(multiply.prototype);


// this keyword---------------->
// this---------->"jisne bhi bulaya h uske pas jao".
// it talks about current context.
function createUser(username,score){
    this.username=username
    this.score=score

}
// we can create own function using "prototype" 

createUser.prototype.increment=function(){
  this.score++
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

// problem statement---->
// when two function call is cuncurrently calling ---->

// here "createuser" function is confused whether it increment chai or tea.
//because it has no context

const chai= new createUser("chai",20)
const tea= new createUser("tea",200)

// we use "this keyword " to avoid this scenario.

// now we call the funcctions----------------->
/*
const chai= createUser("chai",20)
const tea=  createUser("tea",200)

// context is created and it is injected in protoype but when we run this code it gives us error because we injected additional properties to prototype so we must use "new " keyword to tell the function  you have some user defined properties.
*/


chai.printMe() 






/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
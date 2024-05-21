//********************************************************************************

// Stack and heap memory------->

//Stack Memory------->Primitive data type (copy of a variable)

// Heap Memory------->Non-Primitive data type (reference of original value)



// stack memory example------------->
let myName="hiiwhatsup"

let anotherName=myName  // giving the copy of a myName variable

anotherName="chaiorcode" // because of a copy given by the user1 the original data did not change 


//console.log(myName)
//console.log(anotherName)


// Heap memory example-------------->


let user1={
    email:"sd@gmail.com",
    upi:"user1@ybl"
}


let user2=user1  // reference of original value 
//every changes are reflect to the original value .
user2.email="qwe@gmail.com"
user2.upi="qwe@ybl"

console.log(user1.email)
console.log(user2.email)


//if----->  comparision operator(<,>,<=,>=,==,!=,===(strictly checks type),!==)



const isUserLoggedIn=true

const temperature=41
/*

if(temperature<50){

    console.log("temperature less than 50");

}else{

console.log("temperature is greater than 50");

}
*/



const score=200
/*
if(score>100){
     const power="fly"   // power is block scope 
     console.log(`user power ${power}`)
}
console.log(`user power ${power}`)  // because power is block scope

*/




const balance=1000
/*
if(balance<500){

       console.log("less than");

}else if(balance<750){

    console.log("less than 750");

}else if(balance<900){

    console.log("less than 900");

}else{

    console.log("less than 1200");

}
*/


const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true
/*
if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInfromEmail  || loggedInfromGoogle){
    console.log("user logged in");
}

*/


// SWITCH  CASE-------------------------------------->

const month="apr"

switch (month) {
    case "jan":
        console.log("jan");
        
        break;
    case "fab":
        console.log("fab");
            
        break;
    case "mar" :
        console.log("mar");
        break

    case "apr" :
    console.log("apr")       
    break;

    default:
        console.log(`month is not a ${month}`);
        break;
}





// SHORTHAND NOTATION---------------------------->
// condition ? true: false
const iceTeaPrice=100
iceTeaPrice>80?console.log("greater than 80"):console.log("less than 80");;


































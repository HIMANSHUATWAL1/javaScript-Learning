// shopping card problem----->

//(...) => Rest or Spred operator-->

/*
function calculateCardPrice(val1,val2,...num1){
    return num1;
}
calculateCardPrice(200,34,322,344)

 val1=200
 val2=34

 Displayed result---> [322,344]

*/


function calculateCardPrice(...num1){
    return num1
}

//console.log(calculateCardPrice(2,4,6,5,4,3))


// how to use object in function---->

const user={
    username:"hem",
    age:21

}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and age is ${anyobject.age}`);
}

//handleObject(user)
/*handleObject({
    username:"sam",
    age:23
})
*/


// Array in function--->


const mynewArray=[100,200,400,500]

function returnSecondNum(getArray){
    return getArray[1]

}

//console.log(returnSecondNum(mynewArray));

console.log(returnSecondNum([100,200,400,300]));


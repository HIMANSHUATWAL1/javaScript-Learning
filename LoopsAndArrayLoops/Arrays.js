//<-----------------------------Arrays--------------------------------->

const myArr=[1,2,3,4,2,2,6]
//console.log(myArr[3])


//Shallow copy==> whose properties shares the same reference (changes reflects on original array)

//Deep copy==> whose properties do not shares the  same references(changes are not reflect on original array)


const myHeros=["shaktiman","nagraaj"]

const myArr2=new Array(1,2,3,4)

// <----------------Array Methods------------->

//push--->
myArr.push(9)
myArr.push(7)
//console.log(myArr)

// pop---->
myArr.pop()
//console.log(myArr)


//unshift----->
myArr.unshift(0)
//console.log(myArr)

//shift-->
myArr.shift()
//console.log(myArr)

//includes--->
//console.log(myArr.includes(9))  

//index---->
//console.log(myArr.indexOf(3))

//join--->

const newArr=myArr.join() // join method adds new element and convert array into string in comma seperated

//console.log(myArr)
//console.log(typeof newArr)


//slice----> It does not changes the original array and return the slices element

console.log("A  ",myArr)
const myArr1=myArr.slice(1,3)

console.log(myArr1)
console.log("B  ",myArr)

// splice----->  It changes/manupulate the original array  and cut the spliced element from original array

const myArr3=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myArr3)







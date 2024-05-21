/*
const coding=["js","ruby","java","cpp"]
// for Each do not reurn any values .
const values=coding.forEach((item)=>{
    //console.log(item)
    return item  
})

console.log(values)  // undefined

*/

//<----------------------filter----------------------------------->
// filter returns the value after filtering values using specific callback function.
const myNums=[1,2,3,4,5,6,7,8,9,10]
/*
const value=myNums.filter((num)=>{
     return  num>4
})

console.log(value);
*/

// using forEach Method---------------->
/*
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
       newNums.push(num)
    }

})

console.log(newNums);
*/



// Some more usecase of Filter Method---------------->

const book=[
    {
        title:"b1",genre:'fiction',publlish:2003,edition:2004
    },
    {
        title:"b2",genre:'history',publlish:1971,edition:2014
    },
    {
        title:"b3",genre:'history',publlish:2001,edition:2008
    },
    {
        title:"b4",genre:'fiction',publlish:1987,edition:2010
    },
    {
        title:"b5",genre:'science',publlish:2011,edition:2016
    }

]
/*
const userBooks=book.filter((bk)=>{
    return bk.genre==="history"

})
*/

const userBooks1=book.filter((bk)=>{
    return( bk.publlish>=1995 && bk.genre==="history")
})
 
console.log(userBooks1);




















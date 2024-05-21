//<--------------Map----------------------------------------->
// returns a value 

const mynums=[1,2,3,4,5,6,7,8,9,10] 
/*
const newnum=mynums.map((num)=>{
      return num+10
})
*/

//<-------------chaining---------->



const newnum=mynums.map((num)=>{
      return num*10  //new array is  [10,20,30....so on up to 10]
 // after this second map function perform its operation in multiplied value [10,20,30...so on]
           }).map((num)=>{
    return num+1
    // after this new array is [11,21,31,....so on ]
           }).filter((num)=>{
    return num>=40
    // here new array returned by filter is [41,51,....so on, greater than 40]
      })

//console.log(newnum); 




//<---------------------reduce Method--------------------------------->
// returns a reduced value .

// reduce method takes accumalator and current value .
// here accumalator (acc) is empty variable and  currval is current value in array.
// At first acc take initial value given by user after that it takes returned value .
const arr1=[1,2,3,4,5]
/*
const myarr=arr1.reduce((acc,currval)=>{
    console.log(`acc :${acc} and currval:${currval}`);
       return acc+currval
},0 )  // here 0 is initial value.


console.log(myarr);
*/


const shoppingCart=[
 {
    itemName:"js course",
    price:2999
 },
 {
    itemName:"python",
    price:1999
 },
 {
    itemName:"mobil dev",
    price:4999
 },
 {
    itemName:"data science course",
    price:12999
 }
]


const totalPurchase=shoppingCart.reduce((acc,item)=>{
     return acc+item.price
},0)

console.log(totalPurchase);



 
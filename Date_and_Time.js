// Dates are calculated in milliseconds from jan 1,1970 .------------------>

let myDate=new Date()
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toISOString()) 
//console.log(myDate.toJSON())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleTimeString())
//console.log(myDate.toTimeString())
//console.log(myDate.toLocaleString())

//console.log(typeof myDate)  //object

//let myCreatedDate=new Date(2024,0,23)
let myCreatedDate=new Date(2024,0,23,5,3,4)
//let myCreatedDate=new Date("2024-04-15")
//let myCreatedDate=new Date("01-14-2024")
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now() //values in milliseconds
//console.log(myTimeStamp) 

//console.log(myCreatedDate.getDay()) 

//console.log(Math.floor(Date.now()/1000)) //millisecond into seconds

let newDate=new Date()

//console.log(newDate.getDate())

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day:"2-digit"

}))



// for Each loop------------------>

const coding=["js","java","python","ruby","cpp"]
/*
coding.forEach(function(item){
    console.log(item);
} )
*/
/*
coding.forEach((item)=>{
       console.log(item);
})
*/

// function under forEach loop------>

function printMe(item){
  //  console.log(item);
}

//coding.forEach(printMe)

// for each loop also has parameter item,index,full array access.

coding.forEach((item,index,arr)=>{
        //  console.log(item,index,arr);
})

// object under array------------------>

const myCoding=[
    {
        langName:"java",
        langFile:"java"
    },
    {
        langName:"javaScript",
        langFile:"js"
    },
    {
        langName:"python",
        langFile:"py"
    }
]

myCoding.forEach((item)=>{
      console.log(item.langName);
})









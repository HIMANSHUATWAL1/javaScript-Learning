/*
Promises is an "object" represents the eventual completion (or failure ) of an async operation and its resulting value;

 ex-cryptography,network Request,file reader

 States of Promises------>
 1.pending
 2.fulfilled
 3.rejected

 */
//Promise is  Introduced in ES6 (Q and  bluebird libraries to use promises functionalities ) after the node.js gives us facilities of promises we have not to use these libraries.

/*

 const promiseOne= new Promise((resolve,reject)=>{
    // do async task
    //DB calls,cryptography,network related  

    setTimeout(()=>{
        console.log('Async task is complete');
        resolve()
    },1000)


 })
 promiseOne.then(()=>{
    console.log('promise consumed');
 })

// another way to write syntax----->

 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hii second is executed");
        resolve()
    },1000)
 }).then(()=>{
    console.log("promise two consumed");
 })



const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
          resolve({username:"chai",email:"chai@code.com"})
          // resolve parameter is directly accessed by then methods as parameter .
    },1000)
})

promiseThree.then((user)=>{
           console.log(user);
})


const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"hem",pass:1234})
        }else{
            reject('somthing went wrong')
        }
   
    },1000)
})



promiseFour.then((user)=>{

    console.log(user);
    return user.username
    // here returned value is passed as parameter in next then method.

})
.then((username)=>{
    console.log(username);

})
.catch(()=>{
    console.log("EROOR:find");
})
.finally(()=>{
    console.log("The Promise is Either resolve or Reject");
})




//<----------------------- new syntax----------------------------->
const  promiseFive=new Promise((resolve,reject)=>{
              setTimeout(() => {
                  let error=true;
                  if(!error){
                    resolve({username:"hem atwal" ,pass:2345,job:"web developer"})
                  }else{
                    reject("promise5 went wrong");
                  }
              }, 1000);

})

// when we use async and Await in our promises then we must use try catch block   .

async  function consumeProFive(){
   try {
    const response=await promiseFive    // here promise is a evantual completion object
    console.log(response);
    
   } catch (error) {
       console.log(error);
   }
}

consumeProFive()

*/
/* 

async function getAllUsers(){
  try {
    const response = await fetch("https://api.github.com/users/himanshuAtwal1")
   // console.log(response)
    const data= await response.json()  // String values to json values(in conversion is json file it takes time so we have declaire it from "await" keyword)
 
    console.log(data);
    
  } catch (error) {
    console.log("E:",error);
  }

} 

getAllUsers()


*/


fetch('https://api.github.com/users/himanshuAtwal1').then((response)=>{
    return response.json()

}).then((data)=>{
     console.log(data);
})
.catch((error)=>{
    console.log(error);
})





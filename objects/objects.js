// singleton---> single instance of object (through constructor)
// Object.create()


//non-singleton--->creating object by literals.

//object literals------>

const mysym=Symbol("key1")

//object literal-->
const jsUser={
    name:"Hem",
    "full name":"hem Atwal",
    [mysym]:"mykey1",
    age:20,
    location:"haldwani",
    email:"hem@gmail.com",
    isLoggedin:false,
    lastLoggedin:["monday","tuesday"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);  //better practice
//console.log(jsUser["full name"]);
//console.log(typeof jsUser[mysym]);




jsUser.email="hem.200@gamil.com"

//Object.freeze(jsUser)    // freezing the object


jsUser.email="hem.200@gamilmicro.com"

//console.log(jsUser);


// Adding new key using function in object----->
jsUser.greeting=function(){
    console.log("hello js user");
}

jsUser.greeting2=function(){
    console.log(`hello js user,${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());


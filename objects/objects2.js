//const tinderUser=new Object()    // singleton object


const tinderUser={}     // non-singleton object

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedin=false

//console.log(tinderUser);

//Object Under Object---->

const regularuser={
    email:"sam@gamil.com",
    fullname:{
        userFullname:{
            firstName:"hitesh",
            lastName:"singh"
        }
    }
}

//console.log(regularuser.fullname.userFullname.firstName);


// combining object ------->

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)    // for combinig values

const obj3={...obj1,...obj2}

//console.log(obj3);

// data from database---------->
const user=[
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:2,
        email:"h@gamil.com"
    },
    {
        id:3,
        email:"h@gamil.com"
    }
]

user[1].email

//console.log(tinderUser);


console.log(Object.keys(tinderUser));  // keys in form of a Array
console.log(Object.values(tinderUser));// values in form of a Array

console.log(Object.entries(tinderUser)) // array of array [[key:value],[key:value]]


console.log(tinderUser.hasOwnProperty('isLoggedin')); // for checking the existance of key.




















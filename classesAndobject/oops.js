// object literals--------->
/*
const user={
    username:"hem",
    login:8,
    signedIn:true,

    getUserDetail:function(){
        //console.log("got user details from database");
        console.log(`username:${this.username}`);

    }

}
console.log(user.username);
console.log(user.getUserDetail());

*/

//constructer Function-------------->
// gives the new instance (copy ) 

function User(userName,loginCount,isLoggedin){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedin=isLoggedin;


   return this
}


const userOne=new User("hem",12,true);
const userTwo=new User("hii",13,false)

console.log(userOne);
console.log(userTwo);


// new ---->empty object creation (instatance)
// constructor function call
// all the methods are added 
//answer  got  by user











function setUsername(username){
    // complex db call
    this.username=username
    console.log("called....");
}

function createUser(username,email,password){
    // for calling exiplicitly we use ".call function"
    // when we donot gives the reference then exicution context is suspended with all the variable declaired for the function.
    setUsername.call(this,username)
    // here we gives the self reference this to call exiplicitly.

    this.email=email
    this.password=password

}

const chai=new createUser("chai","chai@fb.com",1234);
console.log(chai);
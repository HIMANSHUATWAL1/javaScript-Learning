/*
let myName="hitesh   "


// we wants a method that gives us true length of string .
console.log(myName.trueLength());


*/


let myHero =["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"webshoot",
    
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}
// here we adding new properties in our object  and it is accessible by all lower level hirarchy (array,string ,function). 

Object.prototype.hitesh=function(){
    console.log(`hitesh power is present in all object`);
}


Array.prototype.heyHitesh=function(){
    console.log(`hitesh please say hello`);
}


//heroPower.hitesh()
// lets check for array--------------->
//myHero.hitesh()

// here we are trying to access higher level of hirarchy from lower level of hirarchy function so it throws error .
 // heroPower.heyHitesh()

//myHero.heyHitesh()

//<-------------------Inheritance-------------------------------------->

const user={
    name:"chai",
    email:"hey@google.com"
}

const Teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}



const TAsupport={
    makeAssign:'js assignment',
    fullTime:true,
    __proto__:teachingSupport

}


Teacher.__proto__=user

// modern syntax---------------------->


Object.setPrototypeOf(teachingSupport,Teacher)




let anotherUsername="chaiorcode     "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is:${this.trim().length}`);
}

//anotherUsername.trueLength();

"hitesh   ".trueLength()
"iceTea".trueLength()



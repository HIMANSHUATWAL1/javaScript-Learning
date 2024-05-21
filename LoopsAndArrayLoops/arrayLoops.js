 //<----------------------- for of loop------------------>



const arr=[1,2,3,4,5]

for (const val of arr) {
   // console.log(val);
}

const greeting="Hello world";
for(const greet of greeting){
  //  console.log(`each char is ${greet}`);
}

// Maps --------------->   // object holding key ,value pair.

const map=new Map()
map.set('IN',"india")
map.set('usa',"united state of America")
map.set('fr',"france")
map.set('IN',"india")

//console.log(map);
/*
for(const i of map){
    console.log(i);
}

output is in a form of each key ,value pair array.
*/

for (const [key,value] of map) {
   // console.log(key,':-',value);
}


//<----------------------OBJECT--------------------------->
const myObj={
    'game1':"nfd",
    "game2":"spiderman"
}

/*
with "for of loop" objects are not iterable --->

for (const [key,value] of myObj) {
    console.log(key,':-',value);
}
*/

//<--------------------FOR IN LOOP------------------------------------>
// it gives the keys of obj,arr etc.
const myObj1={
    js :"javascript",
    cpp:"c plus plus",
    py:"python",
    rb:"ruby"
}

for (const key in myObj1) {
  // console.log(`key ${key} :value ${myObj1[key]}`);
}


// for in loop in array----------------->
const programming=["js","ruby","java","cpp"]

for (const key in programming) {
   //console.log(programming[key]);
}


// for in loop in map--------->
// we cannot use for inloop in maps.

const map1=new Map()
map.set('IN',"india")
map.set('usa',"united state of America")
map.set('fr',"france")
map.set('IN',"india")

for (const key in map1) {
  //console.log(key);
}




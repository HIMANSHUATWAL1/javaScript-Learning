// for loop------------>
 let arr=[1,2,4,5,3,2]
 /*
for (let i=0;i<arr.length;i++) {
    if(arr[i]==5){
        console.log("5 is a best number");
    }
   console.log(arr[i]);
    
}
*/

for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop value :${i}`);
   for (let j = 1; j <=10; j++) {
    //console.log(`inner loop value:${j} and outer loop ${i}`);
    //console.log(i+'*'+j+"="+i*j);
    
   }
    
}

myarray=["batman","superman","flash","nagraj"]

for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    //console.log(element);
}

/*

//<---------------------- break and continue-------------------->

for (let i = 1; i <=20; i++) {
      if (i==5) {
        // console.log("detected 5");
         break        
      }
   // console.log(`value of i is:${i}`);

}



for (let i = 1; i <=20; i++) {
    if (i==5) {
      console.log("detected 5");
       continue       
    }
  console.log(`value of i is:${i}`);

}

*/







// do-while loop------------------------->
/*
let index=0
while (index<=10) {
    console.log(`value of index is ${index}`);
    index=index+2
}

*/

let myarr=["flash","nagraj","batman"]
/*
let i=0
while (i<myarr.length) {
    console.log(`value is ${myarr[i]}`);
    i=i+1
}

*/
let score=11

do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);







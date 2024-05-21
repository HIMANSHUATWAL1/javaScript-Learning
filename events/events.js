/*
Less featers  ----->
document.getElementById('owl').onclick=function(){

}
*/ 
// attachEvent()
//jQuery--on

/*

In EVENT OBJECT --->type,timestamp,defaultPrevented,Target,sourceElement,CurrentTarget
 clientX,clientY,ScreenX,screenY
altKey,ctrlKey,shiftKey,keyCode

*/
/*
Propagation----->

1.event Bubbling--->from  inner element  to outer element (using default false  value of addEventListner ) .
2.event Capturing---->from top to bottom (using true value of addEventListner )

e.stopPropagation()--->prevents Bubbling.
 e.preventDefault()---->preventing default behaivioure.



*/

/*

document.getElementById('images').addEventListener('click',(e)=>{
   // e-->event object.
   console.log("clicked inside the url");
  
},false)

document.getElementById('owl').addEventListener('click',(e)=>{
   // e-->event object.
   console.log(" owl clicked");
   e.stopPropagation()
  
},false)

document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("google clicked");
 


},false)

*/
// removing  image from our ul------------------------------>
document.querySelector("#images").addEventListener('click',(e)=>{
      console.log(e.target.tagName );//parentNode

      if(e.target.tagName==='IMG'){
        console.log(e.target.id );
        let removeIt=e.target.parentNode
        // removeIt.remove();
        removeIt.parentNode.removeChild(removeIt)
      }
     
},false)























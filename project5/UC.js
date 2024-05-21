// random color generator------------------->

const randomColor=function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}

console.log(randomColor())

/*
let color=["red","green","yellow","blue","#414141","purple"]
*/
const body=document.querySelector("body")
const start=document.getElementById("start");
const stop=document.getElementById("stop");
let interval;
let i=0;
  start.addEventListener('click',()=>{

   interval= setInterval(()=>{

      
    document.body.style.backgroundColor=randomColor();
    /*
    i=(i+1)%color.length
    */

  },2000);
  console.log("start clicked")
  })

  stop.addEventListener('click',()=>{
    clearInterval(interval)
    interval=null;
    console.log("stop clicked")
  })







// for formatting API we use json formatter.
// random.api ,github/users/nan=me of account.


// AJAX request (XML)-async jkavascript XML request

//1. object creation --->
const data="https://api.github.com/users/himanshuAtwal1"
const xhr=new XMLHttpRequest();
xhr.open('GET',data)

// for tracking the state --->
let dataF;
xhr.onreadystatechange=function(){
   
console.log(xhr.readyState);

if(xhr.readyState===4){
      // converting String formate to json.
      dataF=JSON.parse(this.responseText);
    console.log((dataF));
    console.log(dataF.id);
}
}

xhr.send();




const button=document.querySelector("#see");
const insert=document.querySelector(".insert")

button.addEventListener('click',()=>{
    insert.innerHTML=`
    <div class="card">
      ${dataF.avatar_url}
      
      ${dataF.followers}
    </div>
    
    `

})
const form=document.querySelector('form')
     // thhie usecase will give you empty value 
     //const height= parseInt ( document.querySelector('#height').value)
form.addEventListener('submit',(e)=>{
        e.preventDefault()   // for preventing form to submit in server
         
   const height= parseInt ( document.querySelector('#height').value);
   const weight= parseInt ( document.querySelector('#weight').value);
   const result= document.querySelector('#results');

if(height===''|| height<0 || isNaN(height)){
     result.innerHTML=`please enter a valid height ${height}`
    
}else if(weight===''|| weight<0 || isNaN(weight)){
     result.innerHTML=`please enter a valid weight ${weight}`
    
}else{
      const BMI=(weight/((height*height)/10000)).toFixed(2);
      result.innerHTML=`<span> ${BMI} </span> <br>`
    
    if(BMI<18.6){
        result.innerHTML+="Under-Weight"
    }
    if(BMI>18.6 && BMI<24.9){
        result.innerHTML+="Normal-Range"
    }
    if(BMI>24.9){
        result.innerHTML+="Over-Weight"
    }

}




})
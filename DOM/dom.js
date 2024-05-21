/*
  Value or Content from document--------------->
    
    const title=document.getElementById("title")

   1.title.textContent   (All the text content )
    'dom learning on chai or code'
     
    2.title.innerHTML   (All the Html with style )
     'dom learning on chai or code'

     3. title.innerText    (Only visible text content )
     'dom learning on chai or code'


 <------------------- QuerySelector (Indevisual Selector)---------------------------------------->

 
document.querySelector("h1")
<h1 id=​"title" class=​"heading ">​…​</h1>​

document.querySelector("#title")
<h1 id=​"title" class=​"heading ">​…​</h1>​

document.querySelector(".heading")
<h1 id=​"title" class=​"heading ">​…​</h1>​

document.querySelector("ul")
<ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

const mylist=document.querySelector("ul")
undefined

mylist.querySelector("li")
<li>​…​</li>​::marker​"one"</li>​

const turngreen=mylist.querySelector("li")
undefined

turngreen.style.backgroundColor="yellow"
'yellow'

turngreen.innerText="yellow"
'yellow'


 <------------------- QuerySelectorAll---------------------------------------->

NodeList-->List of nodes .It is not pure array but some properties of array will work.
==>A nodelist is a collection of document nodes which includes text nodes , attribute nodes and element nodes. A line break is also counted in nodelist but only first one. All subsequent line breaks are ignored by browser
const list=document.querySelectorAll("li")
undefined

list[0].style.color="green"
'green'

const list=document.querySelectorAll("li")
undefined


list.forEach((item)=>{
            item.style.backgroundColor="blue"      
           })
undefined



<------------------Html Collections------------------------------->
         =>collection of HTML Element
const tempclassList=document.getElementsByClassName("Litem")
undefined

tempclassList
HTMLCollection(4) [li.Litem, li.Litem, li.Litem, li.Litem]

Array.from(tempclassList)
(4) [li.Litem, li.Litem, li.Litem, li.Litem]






*/
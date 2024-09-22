const name="hem"
const repoCount=50
const gameName=new String("raja-fc-hey-hii")

//console.log(name + repoCount + " value")
// string Interpolation  (    ` ${} `--->placeholders  )
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

//console.log(gameName.__proto__)--->{}

//console.log(gameName[0])   // r
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(4))
//console.log(gameName.indexOf('f'))
//console.log(gameName.charCodeAt(6))

const newString=gameName.substring(1,4)
//console.log(newString)

const anotherString=gameName.slice(-8,5)
//console.log(anotherString)

const newString1="    rajamoji    "

//console.log(newString1)
//console.log(newString1.trim())

const url="https://himraj.com/raja%20moji"


//console.log(url.replace('%20','-'))

//console.log(url.includes('hey'))  //false

console.log(gameName.split('-'))


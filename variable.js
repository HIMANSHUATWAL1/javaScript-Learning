const accountId = 144453
let accountEmail="herdnj@gmail.com"
var accountpassword="12345"
accountCity="Jaipur"  // we can declaire variable in this method but it is not a good approch to declaire the variable.
let accountState ;   // undefined (not defined till now)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
// {}---> scope 
// accountId=2
accountEmail="hc@gmail.com"
accountCity="bengluru"

console.log(accountId)
// for more than one data it displays in form of table
console.table([accountEmail,accountState,accountId,accountpassword,accountCity])

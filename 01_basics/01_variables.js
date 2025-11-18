const accountId = 178203 //can't be changed further
let accountEmail = "aryan@gmail.com"
var accountPassword = "12345"
accountCity = "Dhanbad"
let accountState; //will return undefined coz we have not assigend a value to it

// accountId = 0708208 //not allowed

//Rest all can be changed
accountEmail = "harsh.gmail.com"
accountPassword = "00000"
accountCity = "Delhi"

console.log("accountId") //would have shown error if accountId was changed.

//In JS variables can be declared using let or var both but...

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

const accountId = 178203
let accountEmail = "aryan@gmail.com"
var accountPassword = "12345"
accountCity = "Dhanbad"
let accountState;

// accountId = 0708208 //not allowed

accountEmail = "harsh.gmail.com"
accountPassword = "00000"
accountCity = "Delhi"

console.log("accountId")

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState;
console.log(accountId);
/*
Prefer not to use var beacause of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

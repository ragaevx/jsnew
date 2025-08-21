const accountId = 144553
let accountEmail = "raghavdev31@gmail.com"
var accountPassowrd = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "raghaaa@gmail.com"
accountPassowrd = "122231"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])

const accountId = 14423;
let accountPassword = "12345";
var accountEmail = "nick@nickme.in";
accountCity = "Panjim";
let accountState;

// accountId = 2; //Not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "purva@nickme.in";
accountPassword = "54321";
accountCity = "Jaipur";

console.table([accountCity, accountEmail, accountPassword, accountState]);
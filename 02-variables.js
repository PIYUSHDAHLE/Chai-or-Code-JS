const accountId = 125;   //block-scoped variable
let accountEmail = "piyush@gamil.com";  //block-scoped variable
var accountType = "Saving";   // global variable
accountCity = "Pune";

// accountId = 500  TypeError: Assignment to constant variable.
accountEmail = "dahle@gmail.com";
accountType = "Current";
accountCity = "Hyderabad";

console.log(accountId);
console.table([accountId, accountEmail, accountType, accountCity]);

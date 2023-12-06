const accountId= 12345;
let accontEmail= "dipstha061@gmail.com";
var accontPassowrd= "9876";
accountCity= "Gorkha";
let  accontState;
// accountId= 2 not allowed because of const

accontEmail= "hsg@hdd.com";
accontPassowrd= "123456";
accountCity= "Kathmandu";

console.log(accountId);
/*
Prefer not to use var because of isse in block scope and fnctional scope
*/

console.table([accontEmail,accontPassowrd,accountCity,accontState]);
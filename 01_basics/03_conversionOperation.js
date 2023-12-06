let score = "33"// null=> 0, undefined=> NaN, true,false=> 1/0 

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Booleans(isLoggedIn)

//" " =>false
//"Dipesh" => true


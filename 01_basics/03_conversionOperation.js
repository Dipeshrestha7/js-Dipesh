let score = "33"// null=> 0, undefined=> NaN, true,false=> 1/0 

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0



// " " =>false
// "Dipesh" => true

let someNumber = 33
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


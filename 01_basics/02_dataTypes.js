//"use strrict"; //treat all JS code as newer version 
// alert(3+3)  We are using node js, not browser

// console.log(3+
//     3) // code readability that should be high 
    
// console.group("Dipesh")


//number=> 2 to power 53
//bigint 
//string => "", ''
//boolean=> true/false
//null = standa lone value
//undefined
//symbol=> unique
//Object 

// let name= "Dipesh"
// let age= 20
// let isLoggedIn= True

// console.log(typeof "Dipesh");

// 1) Primitive data types
//    7 types: String, NUmber , Boolean, null, undefined, Symbol, BigInt

// 2) Reference(Non Primitive Data Type)
//     Array, Object, Functions

//*******************************************************************************************

// Momory= Stack and Heap

// //Stack used in Primitive
// //Heap used in non primitive 


//eg of stack in whic it make duplicate value
let myName= "Dipesh"
let anotherNAme= myName
anotherName= "DipeshShrestha"
console.log(anotherNAme)


//eg for heap in which it doesn't make duplicate value
let userOne= {
    email:"dipstha061@gmail.com"

}

let userTwo= userOne

userTwo.email= "dipeshshrestha@111"
console.log(userOne.email)
console.log(userTwo.email)













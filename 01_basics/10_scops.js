/////////////////////Global Scope\\\\\\\\\\\\\\\
//var c=300 var shows the output value of c which is in the block scope

let a=300 // let shows the output value of a which is in the global scope  

if(true){
    /////////Block Scope\\\\\\\\\\
    let a= 10
//const b=20
     //c= 30
     console.log("Inner",a)
}

console.log(a)
//console.log(b)
//console.log(c)
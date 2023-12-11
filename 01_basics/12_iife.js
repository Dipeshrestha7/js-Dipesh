
//Immediately Invoked Fnction Exression (IIFE)
//TO remove polltion of Global scope we use iife
(function one(){

    console.log(`DB Connected`);
})();


( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
} )("Dipesh")

let value1=4
let value2= 5

function addValue(num1,num2){
    total = num1+ num2;
    return total;
}
let result1= addValue(value1,value2);
let result2 = addValue(10,2)
console.log(result1)
console.log(result2)









function sayMyName(){
    console.log("D")
    console.log("I")
    console.log("P")
    console.log("E")
    console.log("S")
    console.log("H")
}

//sayMyName();


// function addTwoNumbers(num1, num2){

// console.log(num1+num2)

// }

//addTwoNumbers(1,2)//call

function addTwoNumbers(num1, num2){

    let result=num1+ num2;  // or return num1+num2 
    return result;
    console.log("DIpesh")// this own't print because it is after result part
    }
const result= addTwoNumbers(1,2)
//console.log("result:",result)

function logInUserMsg(username = "Sam"){
    if(username===undefined){
console.log("Please enter the username")
    }
    return '${username} just logged In'
}

//console.log(logInUserMsg("Dipesh"))
//console.log(logInUserMsg(""))

//////////////////////function with Obj and Array\\\\\\\\\\\\\\\\\\\\\\\\

function calculateCarPrise(val1,val2,...num1){
    return num1;
}

console.log(calculateCarPrise(200,400,600,800,1000))

const user={
    username:"Dipesh",
    price: "199"
}

function handelObject(anyObject){
    console.log('Username is ${anyObject.username} and price is ${anyObject.price}');
}

//handelObject(user)

handelObject({
    username: "DIipesh",
    price: "199"
})


const myNewArray= [200,300,400]

function returnSecondValue(getArray){
 return getArray[1]
}
console.log(returnSecondValue(myNewArray))








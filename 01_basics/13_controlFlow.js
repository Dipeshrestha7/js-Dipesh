//if

// if(condition){

// }


const temperature= 50;

if(temperature<50){
    console.log("Less than 50")
}else if(temperature>50){
console.log("Temperature is greater tha 50")
}
else{
    console.log("Equal to 50")
}


///////

const userLoggedIn= true;
const debitCard = false;

if(userLoggedIn || debitCard){
    console.log("Allows to buy courses")
}else{
    console.log("Not allowed")
}



/* switch (key){
    case value:
        break;


    default:
        break;
}
*/

const month= 3

switch (month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("Febuaray")
        break;

    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;
        
    default:
        console.log("Default case match")
        break;
}


//FALSY VALUES
//false, 0,-0,"", null, BigInt 0n, undefined, NaN 

//truthy values
//"0", "FALSE", " ", [], {}, function(){}


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

const emptyArr=[]

if(emptyArr.length===0){
    console.log("Array is empty")
}
















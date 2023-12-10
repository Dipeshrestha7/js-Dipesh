/////////////////////Global Scope\\\\\\\\\\\\\\\
//var c=300 var shows the output value of c which is in the block scope

let a=300 // let shows the output value of a which is in the global scope  

if(true){
    /////////Block Scope\\\\\\\\\\
    let a= 10
//const b=20
     //c= 30
    // console.log("Inner",a)
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username= 'Dipesh'

    function two(){
        const website ='yotube'
       // console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username="dipesh"
    if(username==="dipesh"){
        const website="yotube"
        console.log(username+website)
    }

   // console.log(website) error cze it is outside the if statement
}

//console.log(username)  error cze it is outside the if statement

/************************ Interesting **************************/
console.log(addone(5)) //output will come
function addone(num){
    return num+1
}

/////////////////////////////////////////////

console.log(addtwo(5)) //output won't come
const addtwo = function(num){
return num + 2
}





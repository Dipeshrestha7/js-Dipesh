//for loops

/*
for (let i=0; i<=10;i++){
    console.log(i)
}
*/

for (let i=0; i<=10;i++){
    const element= i;
    console.log(element)
    if(element==5){
    console.log("5 is best number")
    }
   
    
}


for (let i=0;i<10;i++){

    console.log(`Outer loop value ${i}`)
 
    for(let j=0; j<=10;j++){

       // console.log(`Inner loops ${j} and Inner loop ${i}`)
        console.log(i+ "*" + j + "=" + i*j)
       
    }
}

let myArray=["Dipesh","Shresths","Ram","Khadka"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

//while loop

let i=0
while(i<=10){
   console.log(`The vale of i is${i}`)
   i++
}


let myArray2=['FLASH','bATMAN']
let arr=0
while(arr<=myArray2.length){
    console.log(`The name of myArray2 is ${myArray2[arr]}`)
    arr++
}

//do while loop

let score =11

do{
    console.log(`Score is ${score}`)
    score++
}
while(score<=10)























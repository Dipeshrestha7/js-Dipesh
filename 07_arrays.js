//arrays
const myArray = [0,1,2,3,4,5,6,7,8,9];
const myHeros= ["Ironman","Spiderman","Superman"];
const myArray2= new Array(1,2,3,4,5,6,)

console.log(myArray[0]);

//Array Methods

myArray.push(6) //add the value
myArray.pop() //remove the last value
console.log(myArray);

myArray.unshift(10)// shift the value 
myArray.shift()  //remove the value (10)

console.log(myArray.includes(9))  //true
console.log(myArray.indexOf(9))  //9

const newArray =myArray.join() //Add all the element into a string
console.log(newArray)





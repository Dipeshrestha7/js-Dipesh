//Create a function that finds return the maximun and minimum values in an array.
var array=[3,4,1,2,5]
function maxAndmin(array){
    var maxNum = Math.max(...array);
    var minNum = Math.min(...array);
 return{maxNum,minNum}
}

console.log(maxAndmin(array))
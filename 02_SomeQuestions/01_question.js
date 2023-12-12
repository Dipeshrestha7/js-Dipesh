//  Write a function that takes an array of number as int and write the sum of all the element.

var array= [1,5,3,4,2]

function sumNumber(array){
return array.reduce((sum, num)=> sum+ num,0)
    
}
console.log(sumNumber(array))
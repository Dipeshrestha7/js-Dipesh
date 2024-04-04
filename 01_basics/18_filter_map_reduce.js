//////////Filter\\\\\\\\\\\\\

//         ture or false 
const coding =['js','java','py','c++'];

const values= coding.forEach((item)=>{
    //console.log(item);
    return item
})

//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num)=>{
    return num>4
})

//console.log(newNums);

const newNum =[]
//
newNum.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }

})
//console.log(newNums);


const books = [
    {title: 'Book One', genere: 'FIction', publish : 1981, edition:'2004'},
    {title: 'Book Two', genere: 'Non-Fiction', publish : 1992, edition:'2008'},
    {title: 'Book Three', genere: 'History', publish : 1999, edition:'2007'},
    {title: 'Book Four', genere: 'Non-Fiction', publish : 1989, edition:'2010'},
    {title: 'Book Five', genere: 'Science', publish : 2009, edition:'2014'}
];

let userBooks= books.filter( (bk) => bk.genere==='History' );
userBooks= books.filter((bk)=>{ 
    return bk.publish >= 2000 
});
//console.log(userBooks);

//////////////////////Map\\\\\\\\\\\\\\\\\\\\\\\\\\

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

//const newnums=myNumbers.map( ( num ) => num+10 );
const newnums = myNumbers.map((num)=>num*10).map((num)=>{ return num+1})
console.log(newnums);

//////////////////////reduce\\\\\\\\\\\\\\\\\\\
const mynumss= [1,2,3,4];

const myTotal = mynumss.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval
},0)
console.log(myTotal);





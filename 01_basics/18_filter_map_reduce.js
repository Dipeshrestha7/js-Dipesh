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
//console.log(newnums);

//////////////////////reduce\\\\\\\\\\\\\\\\\\\
const mynumss= [1,2,3,4];

const myTotal = mynumss.reduce((acc,currval)=>{
   // console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval
},0)
//console.log(myTotal);

const dipesh = [
    { name: 'dipesh', age: '22' }
];

const myinfo = dipesh.map(info => ({
    nameMatch: info.name === 'dipesh',
    ageMatch: info.age === '22'
}));

//console.log(myinfo);
 
let echi =[1,2,3,4,5,15,6,7,8,9];

//const allechi= echi.map((nums)=> nums+1);

//const allechi = echi.filter((nums)=>nums>5)

const allechi = echi.reduce((acc,curr)=>{ return acc+curr})
// console.log(allechi);


///////////////////FILTER\\\\\\\\\\\\\\\\\\\\\\\

let power = [1,2,3,4,5,6,7,8,9,10]

// const Specialpower = power.filter((num) => num>5 )
const Specialpower = power.filter((num) =>{
 return num> 5 || num<5
})
// console.log(Specialpower)


// const kitab = [
//     {title: 'Book One', genere: 'Fiction', publish : 1981, edition:'2004'},
//     {title: 'Book Two', genere: 'Non-Fiction', publish : 1992, edition:'2008'},
//     {title: 'Book Three', genere: 'History', publish : 1999, edition:'2007'},
//     {title: 'Book Four', genere: 'Non-Fiction', publish : 1989, edition:'2010'},
//     {title: 'Book Five', genere: 'Science', publish : 2009, edition:'2014'}
// ];

// let SabKitab = kitab.filter((choose) => {
//     return choose.genere === 'Non-Fiction' && choose.publish >2090;
// })
// console.log(SabKitab)

////////////////MAP\\\\\\\\\\\\\\\\\

let age = [11,22,33,44,55,66,77]

const Totalage = age.map((sum) => {
    return sum +100;
})
console.log(Totalage)

const TotalAge = age
.map((sum) =>{
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = age[i] + total;
    }
    console.log(total)
} )
console.log(TotalAge)

//////////////reduce\\\\\\\\\\\\
//  let Heronum = [1,2,3,4,5,6,7,8]

// const addThis = Heronum.reduce((acc,currval) =>{return acc + currval},0)

// console.log(addThis)
const Person= [
    {name:'Dipesh Shrestha', age:22, weight:65},
    {name:'Nimesh Shrestha', age:23, weight:58},
    {name:'Aayush Shrestha', age:22, weight:60}
]

let Wecan = Person.filter((per) =>{
    return per.name==='Dipesh Shrestha' && per.name ==='Aayush Shrestha'
})
console.log(Wecan)
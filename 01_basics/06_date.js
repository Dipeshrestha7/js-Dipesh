//Date

let myDate = new Date()
console.log(myDate) //2023-12-08T12:01:17.291Z

console.log(myDate.toString()) //Fri Dec 08 2023 12:02:03 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString()) //12/8/2023, 12:03:32 PM

console.log(typeof myDate); //object

/**********************create by user******************** */

let myCreatedDate= new Date(2023,0,23)

console.log(myCreatedDate) // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023  month- 0 start
console.log(myCreatedDate.toLocaleString()) //1/23/2023, 12:00:00 AM

let myCreatedDate1 =new Date("2023-01-14")    //YY-MM-DD
console.log(myCreatedDate1.toLocaleString()) //1/14/2023, 12:00:00 AM

let myCreatedDate2 =new Date("03-14-2023")  //MM-DD-YY
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp= Date.now()
console.log(myTimeStamp); //1702037870957  ....mili sec value
console.log(myCreatedDate2.getTime());   //1678752000000
console.log(Math.floor(Date.now()/1000))  //1702038187....../1000 to to getoutput in sec

let newDate= new Date()
console.log(newDate) //2023-12-08T12:24:41.629Z
console.log(newDate.getMonth()) //11
console.log(newDate.getDay())   //5
console.log(newDate.getFullYear())  //2023


newDate.toLocaleString('defaylt', { 
    weekday:"long",
})



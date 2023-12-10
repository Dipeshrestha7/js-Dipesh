//Objects

//Singleton- with constructor
//onject Literals

// const mySym= Symbol("key1")


// const JsUser= {
//     name: 'Dipesh',
//     age: 18,
//     [mySym]: "key1",
//     location: "Gorkha",
//     email: "dipstha111@gmail.com",
//     isLoggedIn: false,
//     lastLoggedIn: ['Monday','Tuesday']

// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym]) //
// console.log(typeof JsUser.mySym)


// Object.freeze(JsUser) //freeze helps to make a vale permanent
// JsUser.email='dipestha@22.gmail.com'
// console.log(JsUser.email)


// const tinderUser= new Object()
// // const tinderUser= {}

// tinderUser.id= 'i23abc'
// tinderUser.name="Ram"
// tinderUser.isLogginedIn= false
// console.log(tinderUser);

// const regularUser={
//     email:'some@gmail.com',
//     FullName: {
//         userfullname:{
//             firstname: "Dipesh",
//             lastname: 'shrestha'
//         }
//     }

// }
// // console.log(regularUser.FullName.userfullname.firstname)

// const obj1= {1:"a",2:"b"}
// const obj2= {3:"a",4:"b"}

// //const obj3= {obj1,obj2}
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) //to see only keys
// console.log(Object.value(tinderUser)) // to see only values

/////////////////////////////////API

//////D structuring

const course= {
    coursename: "js in nepali",
    price: "1000",
    courseteachers: "Dipesh"
}

//course.courseteachers

const {courseteachers : teacher}= course
console.log(teacher)

//D strcture
// const navbar=({company}) =>{

// }

// navbar(compay ="Dipesh")


//API

{
    "name" = "dipesh",
    "coursename"= "js in nepali",
    "price" = "free"
}



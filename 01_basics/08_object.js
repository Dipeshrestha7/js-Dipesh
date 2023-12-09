//Objects

//Singleton- with constructor
//onject Literals

const mySym= Symbol("key1")


const JsUser= {
    name: 'Dipesh',
    age: 18,
    [mySym]: "key1",
    location: "Gorkha",
    email: "dipstha111@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ['Monday','Tuesday']

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym]) //
console.log(typeof JsUser.mySym)


Object.freeze(JsUser) //freeze helps to make a vale permanent
JsUser.email='dipestha@22.gmail.com'
console.log(JsUser.email)


const tinderUser= new Object()
// const tinderUser= {}

tinderUser.id= 'i23abc'
tinderUser.name="Ram"
tinderUser.isLogginedIn= false
console.log(tinderUser);

const regularUser={
    email:'some@gmail.com',
    FullName: {
        userfullname:{
            firstname: "Dipesh",
            lastname: 'shrestha'
        }
    }

}
console.log(regularUser)


const user= {
    username: "Jack",
    price : "1000",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to webbsite`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username="Shyam"
// user.welcomeMessage()
//console.log(this)


// function one(){
//     let username="Dipesh"
//     console.log(this.username)   ////////thisn cand be used in function
// }

// one()

// const one= (num1,num2) => (num1+ num2)

// const one= (num1,num2) => ({username:'Dipesh'})

// console.log(one(2,3))

// const  myArray =[2,3,4,5,6]


const one =(num1, num2) => (num1+num2)

console.log(one(2,2))



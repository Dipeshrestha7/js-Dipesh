const user= {
    username: "Dipesh",
    loginCount :8,
    isloggedIn: true,
    getUserDetails: function(){
        console.log("Got User Details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;

    return this;
}

const userOne = new User("Dipesh", 8, true)
const userTwo = new User("Axel", 10, false)

console.log(userOne)
console.log(userTwo)








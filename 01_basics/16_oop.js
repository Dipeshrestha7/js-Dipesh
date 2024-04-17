const user= {
    username: "Dipesh",
    loginCount :8,
    isloggedIn: true,
    getUserDetails: function(){
        // console.log("Got User Details from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
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

// console.log(userOne)
// console.log(userTwo)


class Everest {
    constructor(username, email, password){
        this.username= username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const Dipesh = new Everest("Diprsh Shrestha", "dipstha999@gmail.com" , "sdfgh12345");

console.log(Dipesh.encryptPassword());
console.log(Dipesh);

class Dog {
    constructor(name, color, habit) {
        this.name = name;
        this.color = color;
        this.habit = habit;
    }
}

const MyDog = new Dog("John", "Black and White", "Bark");

class smallDog extends Dog {
    constructor(username, color, age) {
        super(undefined, color, ""); // Pass undefined for name and empty string for habit
        this.username = username;
        this.age = age;
    }

    smallD() {
        return `My Dog is about ${this.age} years old and name is ${this.username} and its color is the same as the parent one, which is ${this.color}`;
    }
}

const MySmallDog = new smallDog("Buuu", "Brown", 2); // Provide username, color, and age
console.log(MySmallDog.smallD());

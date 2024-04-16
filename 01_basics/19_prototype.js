//for understanding new keyword
function multiplyBy5(num){
    this.num= num;
    return num*5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(usermane, score){
    this.usermane = usermane;
    this.score = score;
}

createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const momo = new createUser("momo", 100)
const tea = new createUser("ChickenMoMo", 200)

momo.printMe();



//for understanding prototype

// let myName = "dipesh"
// console.log(myName.length);

let myHeros = ["thor","spiderman"];




let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        //console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dipesh = function(){
    console.log(`dipesh is present in all objects`)
}

//heroPower.dipesh()

myHeros.dipesh();

let anotherUserName = "Dipesh Shrestha"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength();

"Dipesh".trueLength();
"Shrestha".trueLength();
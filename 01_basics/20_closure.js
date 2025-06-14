// function Outer() {
//     const name = "Dipesh Shrestha";

//     function Inner(){
//         console.log("Inner", name);
//     }
//     Inner();
// }
// Outer();

function Outer(){
    const name = "Dipesh Shrestha";
    function Inner(){
        console.log("Too Inner",name);
    }

    return Inner;
}

const myF = Outer();
myF();
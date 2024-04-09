//eg.one

const promiseOne=new Promise(function(resolve,reject){
    //DO an aync task
    //DB calls, cryptographu, network
    setTimeout(function(){
       // console.log('Async task is complete');
        resolve();
    },1000)
});

promiseOne.then(function(){
  //  console.log("Promise consumed");
});

//eg.two

new Promise (function(resolve, reject){
    setTimeout(function(){
       // console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    //console.log("Async 2 resolved");
})


//eg.three

const promiseThree =new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Dipesh", email: "dipsthao61@gmail.com"})
    },1000)
});

promiseThree.then(function(user){
  //  console.log(user);
});

//eg.four

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Dipesh",password:"dipesh123456"});
        }
        else{
            reject('Error: Something went wrong');
        }
    },1000)
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err);
}).finally(()=> console.log("The promise is either reslved or rejected"))

//  .then .catch or below one both is same

//eg.five

const promiseFive= new Promise (function(resolve,reject){
setTimeout(function(){
    let error =true
    if(!error){
        resolve({username:"JAvaScript", password:"123"})
    }
    else{
        reject('ERROR: JS went wrong')
    }
},1000)
});

async function consumePromiseFIve(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFIve()

async function getAllUsers(){
    try {
        const response = await fetch('https://stunning-meme-69gvr9rj4jw6h4v7w.github.dev/')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('ERROR', error);
    }
}

// getAllUsers()

fetch('https://api.github.com/users/dipeshrestha7')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error))




const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("........We did it.........");
        resolve();
    },1000)
}).then(function(){
    console.log("Then is also been used successfully")
}).catch((err) => console.log(err))
.finally(() => console.log("Fina lly all task is complete"))


const promiseSeven = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({ username: "Dipesh Shrestha", password : "Stha_dipesh123" })
        }
        else{
            reject('ERROR: JS went wrong');
        }
    },1000)
}).then(function(user){
    console.log(user)
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(err){
    console.log("Err : Error went wrong in JS")
}).finally(function(){
    console.log("Finally it is either resolved either rejected...")
});







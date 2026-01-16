const promiseOne = new Promise(function(resolve,reject){
// do an async task
// DB call,cryptography,network call
setTimeout(function(){
console.log('Async tak is complete');
resolve()

},1000)
}) 
// resolve se direct matlab rakta hai
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve();



    
},1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
  resolve({username:"Chai",email:"chai@example.com"})
   },1000) 
})
PromiseThree.then(function(user){
    console.log(user);

})

const PromiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false;
    if(!error){
        resolve({username:"hitesh",password:"123"});
    }
    else{
        reject('Error: Something went wrong')
    }
},1000)
})
 PromiseFour
 .then((user)=>{
    console.log(user);
    return user.username
    

})
.then((username)=>{
console.log(username);

})
.catch(function(error){
    console.log(error);
    

})



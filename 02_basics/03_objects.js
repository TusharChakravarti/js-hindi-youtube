//   singleton

//object literals
const mySym = Symbol("key1")
const jsuser = {
    name:"Hitesh",
    age:18,
    [mySym]: "mykey1",
    "full name" :"Hitesh Choudhary",
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);
// jsuser.email = "hitesh@cgpt.com"
//  Object.freeze(jsuser)
// jsuser.email = "hitesh@microsoft.com"
// console.log(jsuser);



jsuser.greeting = function(){

console.log("Hello js user");

}

jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());










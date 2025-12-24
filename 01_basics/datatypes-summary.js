// Primitive call by value
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
// symbol ->uniquesness

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp= null
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id===anotherId);

//  const bigNumber = 345885855858858n // big int using n
const heroes = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"hitesh",
    age : 22,
}

const myFunction  = function(){
console.log("hello");

}
console.log(typeof heroes);
console.log(typeof myFunction);


//reference types/Non-primitive

// Arrays,Objects,Functions

//Stack(Primitive) // copy
//Heap(Non-primitive) // reference

let myYouTubename = "hiteshchoudhary.com"
let anothername = myYouTubename
anothername = "chaiaurcode"
console.log(myYouTubename);
console.log(anothername);
let userOne = {
    email: "user@gmail.com",
    upi: "user@gpay.com"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);


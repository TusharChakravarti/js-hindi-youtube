const user = {
    username: "hitesh",
    loginCound: 8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}


// console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this);


// new is constructor function
// const promiseOne = new Promise()
// const Date = new Date()


function User(username,loginCount,isLoggedIn){
this.username = username
this.loginCount = loginCount
this.isLoggedIn = isLoggedIn
this.greeting = function greet(){
    console.log(`Welcome ${this.username}`);

}

 return this
}
// for new return this is not req
const UserOne =  new User("hitesh",12,true)
const userTwo = new  User("chaiAurcode",11,false)
console.log(UserOne);
// console.log(userTwo);

// new ->empty new object create known as instance
// 2] -> constructor function call due to new keyword
// 3] this-> arguments are injected
// 4] you get it inside function

console.log(UserOne.constructor );
console.log(userTwo.constructor );

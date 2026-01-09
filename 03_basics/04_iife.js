// Immediately Invoked Function Expression(IFFE)
// inorder to tackle global scope pollution and to execute function/invoke it immediately
(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
    
})();

//Syntax = ()();  // second parenthesis for execution

// iffe dont know where to stop the context thus after the we need a ; 

((name)=>{
    console.log(`Db Connected to ${name}`);
    
})('hitesh');

  
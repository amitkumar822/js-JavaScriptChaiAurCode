//Immediately Invoked Function Expressions (IIFE)

(function cahi(){
    console.log(`DB CONNECTED`); //DB CONNECTED
})();


(()=>{
    console.log(`DB CONNECTED TWO`); //DB CONNECTED TWO
})();


((name)=>{
    console.log(`My Name is ${name}`); //My Name is Hitesh
})('Hitesh');


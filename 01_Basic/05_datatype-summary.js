/*
Primitive data type 7
7 type :- String, Number, Boolean, null, undefined, symbol, BigInt
*/

/*
Reference (Non primitive)
:- Array, Objects, Function
*/

const score = 100 //number
const scoreValue =100.23 //number

const isLoggedIn = false //boolean
const outsideTemp = null 


const id = Symbol('123')
//Symbol ka use kisi number ko unique banane ke liye use kiya jata hai
const anotherId = Symbol('123') //id and anotherId both difference
// console.log(anotherId===id) // false  


const bigNumber = 123345567734143454662n// BigInt
// console.log(bigNumber)


/*---------Arrays---------*/

// const heros = ["shaktiman","naagraj","doga"]; //Array(object data type)

let myObj = { // object
    name : "Amit",
    age: 23,
}
 const myFunction = function(){ //function
     console.log("Hello world");
 }


// console.table([score,scoreValue,isLoggedIn,outsideTemp,id,anotherId,bigNumber,myObj,myFunction])



/*********************---------- Memory------- **************************** */

/* Stack(Primitive) 
 :-> Stack me primitive data store kiya jata hai and Stack me data ka copy store hota hai n ki refrence
copy ka mpatal new copy data me kuchh vi change karne pe old data me kuchh nhi change hota hai
*/

/*
Heap(No-Primitive)
:- Heap me No-Primitive data store hota hai and Heap me data refrence me store hota hai so refrence data(new data)
 me kuchh change karne pe old data me vi change hoga 
*/

// //Stack(data type)

let myName = "Rohan"
let otherName = myName
otherName = "Kundan"

// console.log(myName); //Rohan
// console.log(otherName);//

// // End Stack code 


//Heap
let userOne = {
    email: "madan12@gmail.com",
    upi:"upi@ybl"
}

let userTwo = userOne
userTwo.email = "Rohan32@gmail.com"

// console.log(userOne.email); //Rohan32@gmail.com
// console.log(userTwo.email);//Rohan32@gmail.com
//dono change ho gaya because heap me refrence jata hai
 
//end Heap
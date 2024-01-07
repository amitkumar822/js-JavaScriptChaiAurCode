//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "MyKey1",
    //mySym se direct symbol ko difine nhi kar sakte hai ise [mySym] se difine karte hai
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)//hitesh@google.com
// console.log(jsUser["email"])//hitesh@google.com

/*
jsUser.email or jsUser["email"] dono tarika se email ko access kar sakte hai 
but  jsUser["email"] kuch object isse only this function() se access kar sate hai
n ki . object se
*/

// console.log(jsUser["full name"])//Hitesh Choudhary
//jsUser["full name"](Right way) ko jsUser.full name ,iss tarika se access nhi kar sakte hai iss liye[] se access karte hai

// console.log(jsUser[mySym])//MyKey1 -> object type

jsUser.email = "hitesh@chatgpt.com" //yahan jsUser.email se email change kar rahe hai
// Object.freeze(jsUser) //Object.freeze() function se object ko freeze kar rahe hai matalb iske freaze karne ke badd koi change object(email) me nhi kar sakte hai
jsUser.email = "hitesh@microsoft.com" // not change email value

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`); 
    /*this. se jsUser ke all proparty user kar sakte hai this. function() use kar ke */
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())
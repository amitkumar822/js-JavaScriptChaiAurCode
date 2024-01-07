let score = "33"

// console.log(typeof scorde)
// console.log(typeof(score))

let valueInNumber = Number(score) // convert Number
// console.log(typeof valueInNumber) // number(convert)
// console.log(valueInNumber)

/*-----------other 2nd conversion-------------*/
let str = undefined//abc12
let valueInNb = Number(str)
// console.log(typeof valueInNb)
// console.log(valueInNb) // NaN (Not a Number):->abc12

/*
"33" => 33
"33abc" =>NaN
true =>1,false=>0
"",null=>0
undefined => NaN
*/

/*---------------3rd Conversion----------------*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) //true


let isLoggedIn1 = "patna"
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1) //true 

/*
1 => true; 0 => false
"" => false
"Patna"=> true
*/

/*-------------String conversion------------------*/
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber) //string (convert number to string)






/**************************OPERATION*****************************/

let value = 3
let negValue = -value
// console.log(negValue)//result negetive value = -3

// console.log(2*3) //6
// console.log(2**3) //double star that means power 2^3=8

// console.log("1"+2+3) //123
// console.log(1+2+"6") //36

console.log(true)
console.log(+true)
console.log(+"")
console.log(false)
console.log(+false)



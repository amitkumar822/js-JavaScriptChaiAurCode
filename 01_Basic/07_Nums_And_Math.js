const score = 400;
console.log(score);

const balance = new Number(400) //400
console.log(balance) //Number: 400

console.log(balance.toFixed(2)); 
/* .toFixed -> Function like float ki trah kam karta hai 
last digit me float(decimal) value ko add karte hai
 */

const otherNumber = 123.694
//console.log(otherNumber.toPrecision(3));

const CountNumber = 1000000
// console.log(CountNumber.toLocaleString());
// console.log(CountNumber.toLocaleString('en-IN'));
/* .toLocalString value ko arrange or Formet me convert(USA Value convert) kar ke data hai
.toLocalString('en-IN') yah indian value me convert kar ke date hai */



/************************************************************************** */
           /*----------- Math Conversion -----------*/

// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.6)); //5-> floor that mean upper value peek karta hai
// console.log(Math.floor(4.6)); //4-> floor that mean lower value peek karta hai

console.log(Math.random()); //random(range 0 to 1) function random number peek karte hai and output date hai
console.log((Math.random()*10)+1);// random value me * 10 karne pe first number 0 ke jaga  1 to 9 peek karega
console.log((Math.floor(Math.random()*10))+1); // Single digit me number me convert kar ke value dega
 
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
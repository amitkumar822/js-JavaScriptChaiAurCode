//Arrays

const arr1 = [1,2,3,4,5]  // JavaScript me arrays [] se initilaize hota hai
const str = ["Amit","Madan"]

const arr2 = new Array(1,2,3,4)
// console.log(arr1);

arr1.push(6)
arr1.push(7) 
arr1.pop()

arr1.unshift(9) // unshift-> function value ko starting me add karte hai ex - 9 1 2 3 4...
arr1.shift()  //shift-> function starting value ko shift(remove) karta hai
// console.log(arr1);
// console.log(arr1.includes(15));//(false) //includes-> function array me value hai ya nhi check karta hai aur result true or false lata hai
// console.log(arr1.indexOf(3)); // indexOf value ka index la kar data hai and value nhi hai to result -1 aata hai

const newArr = arr1.join() //join -> function value ko add karta hai String formate me


/* ==========================================*/

/* slice and splice
arr1 = [5,6,7,8,9,10,11,12]
slice-> slice() similear hi Substring() function ki tara work karta hai and range(1,4) -> starting 1 se and end 3 (last value include nhi hota)
ex:- arr1.slice(1,4) -> output- 6,7,8
original arr1 :- 5,6,7,8,9,10,11,12 

splice -> splice little bit change hai ya value ko print ke saath saath original array ka splice range all value remove kar deta hai original value me
ex:-> arr1.splice(1,4) -> output- 6,7,8,9
original arr1:- 5,10,11,12 (remove all splice value)
*/

const Arr = new Array(5,6,7,8,9,10,11,12)
// console.log(Arr.slice(1,4)); // 6 7 8
console.log("Original A",Arr); //5,6,7,8,9,10,11,12

console.log(Arr.splice(1,4)); //6 7 8 9
console.log("Original B",Arr); 5,10,11,12



/*====================================================*/

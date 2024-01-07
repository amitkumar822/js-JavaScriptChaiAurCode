const hero1 = ["Akshay","MaheshBabu","Ajeet"]
const hero2 = ["Govinda","RamCharan","AnilKapoor"]

// hero1.push(hero2)
// console.log(hero1);
/*
output:-["Akshay","MaheshBabu","Ajeet"["Govinda","RamCharan","AnilKapoor"]]
Array me push() function array ke under array insert karta hai
 */

const newHero = hero1.concat(hero2) //concate only one time two array ko jor(concat) kar sakta hai
// console.log(newHero);  //output:-["Akshay","MaheshBabu","Ajeet","Govinda","RamCharan","AnilKapoor"]

const newHero2 = [...hero1,...hero2]
// console.log(newHero2);
// console.log(newHero);  //output:-["Akshay","MaheshBabu","Ajeet","Govinda","RamCharan","AnilKapoor"]

/*Note:-
concat and ...(Triple dout) both same work(concat word) but some change concat and ... , concat me two string jorta hai or add
kar sakte hai but ... me two or more word one time add 
*/



const numArr = [1,2,3,[4,5,6],7,8,[9,10,[11,12,[14,15]]]]
//this type array ,array inside array 
const resultArr = numArr.flat(Infinity) //.flat(infinity) function print inside arr inside arr single array me convert karta hai
// console.log(resultArr) //1,  2, 3,  4,  5,  6, 7,  8, 9, 10, 11, 12,14, 15
  


/************How to Convert Array*******************/

const convertArr = "HiteshChaudhri"
// console.log(Array.isArray(convertArr)) //result:- false //isArray function check is array yes or not result boolean type

// console.log(Array.from(convertArr)); //result:- [H,i,t,e,s,h,C,h,a,u,d,h,r,i] Array.from() -> function convert Array[]

// console.log(Array.from({name: convertArr})) // result:- [] (Empty result) 

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
/*
Note:-
    Array.of() and Array.from() both any data value ko array[] me convert karta hai
*/

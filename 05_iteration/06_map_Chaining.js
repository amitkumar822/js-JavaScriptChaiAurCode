const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNumbers.map( (num) => num+10);
// console.log(newNum); //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


/************************* Chaining Function ***************************************/

const myNumbers2 = [1,2,3,4,5,6,7,8,9,10];
let newNum2 = myNumbers2.map( (num) => num*10)
                          .map( (num) => num+10)
                          .map( (num) => num+30);
// console.log(newNum2);
/*
output:-
[
    50,  60,  70,  80,
    90, 100, 110, 120,
    130, 140
]
*/
                           
newNum2 = myNumbers2.map( (num) => num*10)
                          .map( (num) => num+10)
                          .map( (num) => num+30)
                          .filter( (num) => num>=80);
// console.log(newNum2);
/*
Output:-
[
   80,  90, 100,
  110, 120, 130,
  140
]
*/
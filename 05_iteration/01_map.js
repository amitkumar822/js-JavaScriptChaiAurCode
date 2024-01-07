const map = new Map();
map.set('India','Delhi');
map.set('Bihar','Patna');
map.set('UP','Lucknow');

for (const key of map) {
    //console.log(key);
}

/*Result:-
    [ 'India', 'Delhi' ]
    [ 'Bihar', 'Patna' ]
    [ 'UP', 'Lucknow' ]
*/

for (const [key,value] of map) {
    //console.log(`${key} :- ${value}`);
    // console.log(key, ' - ',value);
}

/*
    India :- Delhi
    Bihar :- Patna
    UP :- Lucknow
*/



const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNumbers.map( (num) => num+10);
// console.log(newNum); //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]




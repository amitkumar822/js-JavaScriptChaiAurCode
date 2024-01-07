/********************** OBJECT ***********************/

/*
map-> pe for of loop  run karta hai n ki for in loop (for in loop map object pe run karta hai)
*/

const myObject = {
    'India': 'Delhi',
    'Bihar': 'Patna',
    'UP': 'Lucknow',
}

// for (const obj of myObject) {//TypeError: myObject is not iterable
//     // console.log(obj);   //Not run this look on object
// }
// for of loop object pe nhi iterable nhi karta hai

for (const keys in myObject) {
    // console.log(keys); //print key
    console.log(myObject[keys]);//print value
}
/*Key:-
    India
    Bihar
    UP
 */
/*value:-
    Delhi
    Patna
    Lucknow
 */
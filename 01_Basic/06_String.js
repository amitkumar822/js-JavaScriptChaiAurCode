const firstName = "Amit"
const secondName = "Kumar"

// console.log(firstName+secondName); // old method don't use this time

// console.log(`${firstName}${secondName}`);->(`` ->Name->String Interpolation ) //new method use this method this time


const name = "MadanVerma"

const newName = new String("MadanVerma")
// dono tarika se String ko difined kar sakte hai (name and newName dono se)

// console.log(name[0]); //M(output)
// console.log(name.__proto__); //object(output)

// const ans = name.substring(0,3)
// console.log(ans)

// const ans2 = name.slice(0,3)
// console.log(ans2);
// const ans3 = name.slice(-9,9)
// console.log(ans3);

/*-> slice and substring almost same work karte hai but slice some diffrent work karte hai like slice reverse
 word print kara sakte hai example value iss me negative (-2 ,4) or (3,-6) le kar String ko itrate kar sakte hai
*/

const url = "htpp//www.rohan.com//book20%Math32"

// console.log(url.replace("20%","-")); //htpp//www.rohan.com//book-Math32
// console.log(url.includes("rohan"))// true
// console.log(url.includes("madan")) //false
/*
    includes function check karta hai ki string url me avalibale hai ya nhi result boolean type true or false
*/

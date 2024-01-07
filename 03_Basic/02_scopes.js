function one(){
    const username = "Hitesh";

    function two(){
        const website = "Youtuber";
        console.log(username);
    }
    // console.log(website);//website is not defined
    //two();
}
//one();


/******************INTERESTING *****************************/

console.log(addOne(5));//6-> not any error
function addOne(num){
    return num+1;
}
    
// addTwo(5); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}
// console.log(addTwo(5)); //7 not any error
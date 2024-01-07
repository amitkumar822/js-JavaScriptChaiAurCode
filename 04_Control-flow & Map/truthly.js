//Time-> 6h:58m

const userEmail = "ak7772100@gmail.com";

if(userEmail){//true(condition true)->
    //console.log("I have a email");
}else{
    //console.log("Dont't have user email");
}


//falsely value-> 0,-0,BigInt 0n, "", null, underfined, NaN

//truthly value-> "0", 'false', " ",[] , {}, function(){}

const userEmail2 = [];

if(userEmail2.length===0){//true
    //console.log("Array is empty");
}

const emptyobj = {};
if(Object.keys(emptyobj).length===0){
    //console.log("Object is empty");
}




/******************************* */

//Nullish Coalescing Operator (??) : null underfind

let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10;//10
// val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 20;//10


console.log(val1);
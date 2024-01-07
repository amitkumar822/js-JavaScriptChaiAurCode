function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

// console.log(sayMyName());

function addTwoNumber(number1,number2){
    return number1+number2;
}
const result = addTwoNumber(2,4);
// console.log("Result: "+result);

function loginUserMessage(username){
    return `${username} just logged in`;
}

const lomess1 = loginUserMessage("Amit");
const lomess2 = loginUserMessage();
// console.log(lomess1);//Amit just logged in
// console.log(lomess2);//undefined just logged in

function calculateCartPrice1(num){
    return num;
}
// console.log(calculateCartPrice1(100));//100
// console.log(calculateCartPrice1(100,200,300));//100-> here only single price pick function

function calculateCartPrice2(...num){
    return num;
}
const cartPric1 = calculateCartPrice2(100);
// console.log(cartPric1);//[ 100 ]
const cartPric2 = calculateCartPrice2(100,200,300,400,500);
// console.log(cartPric2);//[ 100, 200, 300, 400, 500 ]

/*
NOTE:- Triple doubt(...num) ... ko rest operator kaha jata hai
... diffrent diffrent price items ko ek array me bundal karta hai 
*/



//Time-4h:58m

const user={
    username: "hitesh",
    price:1999
}

function handalObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handalObject(user);  //result:- Username is hitesh and price is 1999

handalObject({ //Username is Amit Kumar and price is 5000
    username:"Amit Kumar",
    price: 5000
})

const MyNewArray = [100,200,300,400];

function returnAnyValue(getArray){
    return getArray[1];
}

// console.log(returnAnyValue(MyNewArray)); //200
console.log(returnAnyValue([400,500,600,700])); //500
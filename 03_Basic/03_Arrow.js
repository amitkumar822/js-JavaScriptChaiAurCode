//Time:-5h30m
const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user()
// user.welcomeMessage();//Hitesh, welcome to website
user.username = "Amit";
// user.welcomeMessage(); //Amit, welcome to website
// console.log(this);//{}-> her this value is empty-{}

const chai = () =>{
    let username = "Hitesh Chaudhary";
    console.log(this.username);//undefined 
    /* 
    this->only function ke under use kar sakte hai
    */
}
// chai()

const addTwoNum = (num1,num2) =>{
    return num1+num2;
}
// console.log(addTwoNum(4,6));//10

const addTwoNum2 = (num1,num2) => (num1+num2); // this function name Implicitly.
// console.log(addTwoNum2(4,6)); //10
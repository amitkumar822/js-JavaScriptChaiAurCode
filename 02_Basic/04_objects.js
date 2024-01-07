//object singleton   

// const tinderUser = new Object(); //singleton object
const tinderUser = {} //non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Rohan"
tinderUser.isLoggedIn = false

// console.log(tinderUser) //output:- { id: '123abc', name: 'Rohan', isLoggedIn: false }

const regularUser = {
    email: "rajat23@gamil.com",
    fullNmae:{
        userFullName:{
            firstName : "Amit",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser.fullNmae.userFullName) //{ firstName: 'Amit', lastName: 'Kumar' }
// console.log(regularUser.fullNmae.userFullName.firstName) //Amit

const obj1 = {1: "a", 2:"b"} // here 1,2 is Key and a,b is object Value
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

// const obj4 = Object.assign({},obj1,obj2,obj3); // all object ko ek saat assign, that mean marge karna
// const res = {...obj1,...obj2,...obj3} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(res)
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "rajat@gmail.com"
    },
    {
        id: 2,
        email: "rajat32@gmail.com"
    },
    {
        id: 3,
        email: "komal25@gmail.com"
    },
]

//Time:- 4h22m

// console.log(users[1].email) //rajat32@gmail.com
// console.log(tinderUser); //{ id: '123abc', name: 'Rohan', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  //output :-[ 'id', 'name', 'isLoggedIn' ] -> all key 
// console.log(Object.values(tinderUser)); //[ '123abc', 'Rohan', false ] -> all value
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Rohan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('name')) //true
/*
-> hasOwnProperty() , this function check value exist karta hai ya nhi result boolean me data hai
*/


const course={ //->yahan course ek object hai
    coursename: "Js in Hindi",
    price: 999,
    courseInstructor:"Hitesh Choudhary"
}

const InstructorName = course.courseInstructor;
// console.log(InstructorName); //Hitesh Choudhary

const {courseInstructor}=course;
// console.log(courseInstructor);//Hitesh Choudhary

const {courseInstructor: instructor}=course;
//console.log(instructor); //Hitesh Choudhary
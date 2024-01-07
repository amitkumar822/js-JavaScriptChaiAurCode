let myDate = new Date()
// console.log(myDate.toString()); //Fri Oct 13 2023 22:44:10 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Fri Oct 13 2023
// console.log(myDate.toLocaleString()); //13/10/2023, 10:44:10 pm
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 2, 13);
// let myCreatedDate = new Date(2023, 2, 13, 5, 3);
// let myCreatedDate = new Date("2023-10-13"); //yyyy-dd-mm
// let myCreatedDate = new Date("01-14-2023"); //mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.getTime()); //.getTime-> function Date ko time(ms) me convert karta hai

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Date.now()/1000); //date ko ms se Second me convert karne ke liye kiya jata hai
// console.log(Math.floor(Date.now()/1000));  //Here floor ka use last decimal value ko remove karne ke liye kiya gaya hai

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday: "long",
    weekday: "narrow",
    weekday: "short"
})

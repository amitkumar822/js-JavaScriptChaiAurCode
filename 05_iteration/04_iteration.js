const coding = ["Java","JavaScript","CPP","PHP","HTML","CSS"];
const values = coding.forEach( (item)=>{
    // console.log(item);
    return item;
});
// console.log(values);//undefined

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums1 = myNums.filter( (num) => num > 4);
// console.log(newNums1); //[ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num) => {
    return num > 4;
});
// console.log(newNums2); //[ 5, 6, 7, 8, 9, 10 ]

const newArrStorage = [];
myNums.forEach( (num)=>{
    if(num > 4){
        newArrStorage.push(num);
    }
});
console.log(newArrStorage); //[ 5, 6, 7, 8, 9, 10 ]
const myNums = [1,2,3];

const totalVal = myNums.reduce(function(acc,currValue){
    // console.log(`acc: ${acc} and currValue: ${currValue}`);
    return acc + currValue;
},0);
// console.log(totalVal);//6

const shoppingCart = [
    {
        itemsName: "Js Course",
        price: 800
    },
    {
        itemsName: "Java Course",
        price: 2500
    },
    {
        itemsName: "HTML Course",
        price: 300
    },
    {
        itemsName: "CSS Course",
        price: 500
    }
];

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0);
// console.log("Price: "+priceToPay); //Price: 4100
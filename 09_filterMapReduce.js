const myNums=[1,2,3,4,5,6,7,8,9,10];

// Filter: Get even numbers
const evenNums=myNums.filter(num=>num%2===0);
console.log("Even Numbers:",evenNums);
// Map: Add 10 to each number
const addedNums=myNums.map(num=>num+10);
console.log("Numbers after adding 10:",addedNums);
//chaining filter and map: Get squares of odd numbers.In chaining we can use multiple methods together.
const oddSquares=myNums.filter(num=>num%2!==0).map(num=>num*num);
console.log("Squares of Odd Numbers:",oddSquares);
// Reduce: Sum of all numbers
const MyNumbers=[1,2,3,4,5];
const myTotal=myNums.reduce((acc,num)=>acc+num,0);
console.log("Total Sum:",myTotal);
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);
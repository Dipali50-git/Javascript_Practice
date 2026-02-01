const myArr=[10,20,30,40,50]
console.log(myArr);
console.log(myArr[2]);
//Array Methods
//1. push() - Add element at the end
myArr.push(60);
myArr.pop();
console.log(myArr);
myArr.unshift(5); //Add element at the beginning
console.log(myArr);
myArr.shift(); //Remove element from the beginning
console.log(myArr);
console.log(myArr.includes(30)); //Check if element exists
console.log(myArr.indexOf(40)); //Get index of element
console.log(myArr.slice(1,4)); //Extract a section of the array
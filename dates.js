//Dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
let myCreatedDate = new Date("11-13-2004")
console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
let myPastDate = new Date(1615852800000); // March 16, 2021
console.log(myPastDate.toUTCString());
let myFutureDate = new Date(1672531200000); // January 1, 2023
console.log(myFutureDate.toLocaleDateString());
let specificDate = new Date(2022, 11, 25, 10, 30, 0); // December 25, 2022 10:30:00
console.log(specificDate.toString());
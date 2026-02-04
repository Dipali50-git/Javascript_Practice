const user={
    username:"Dipali",
    price:5000,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to our website!`);
        console.log(this);
    }
}
// user.welcomeMessage();
// username="Ankita";
// user.welcomeMessage();
console.log(this); // global object
//Arrow Function
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(5,10));
const addTwo=(num1,num2)=>num1+num2;
console.log(addTwo(5,10));
//Immediately Invoked Function Expression(IIFE)
(function chai(){
    console.log("IIFE executed");
})();
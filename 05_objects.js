//singleton
//object literal
const JsUser={
    name:"Dipali",
    age:21,
    location:"India",
    email:"dipalich2004@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday","Saturday"],}
    console.log(JsUser);
    console.log(typeof JsUser);
    console.log(JsUser.email);
    console.log(JsUser.lastLoginDays[1]);
    JsUser.greeting=function(){
        console.log("Hello JsUser");
    }
    JsUser.greetingTwo=function(){
        return `Hello ${this.name} , welcome back!`;
    }
    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());
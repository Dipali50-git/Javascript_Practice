function addTwoNumbers(Number1, Number2){
    console.log(Number1+Number2);
}
const result=addTwoNumbers(5,10);
console.log(result);
function loginUserMessage(username){
    return`${username} just logged in`;
}
console.log(loginUserMessage("Dipali"));
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a valid username");
        return;
}
return `${username} just logged in`
}
console.log(loginUserMessage("Dipali"))
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
}
//console.log(website);
two()
}
one()

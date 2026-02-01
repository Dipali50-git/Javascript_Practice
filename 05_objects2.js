const tinderUser={}
tinderUser.id="123456"
tinderUser.name="Dipali"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
const regularUser={
    email:"dipalich2004@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Dipali",
            lastName:"Chavan"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstName);
const target={a:1,b:2};
const source={b:4,c:5};
const returnedTarget=Object.assign(source,target);
// console.log(source);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));
const course={
    coursename:"Javascript",
    price:999,
    courseInstructor:"Dipali Chavan"
}
const{courseInstructor:instructor}=course;
console.log(instructor);
// for(let key in course){
//     //console.log(`${key} : ${course[key]}`);
//

console.log("----- FOR LOOP -----");
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("----- WHILE LOOP -----");
let j = 1;
while (j <= 3) {
  console.log(j);
  j++;
}

console.log("----- DO-WHILE LOOP -----");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 3);

console.log("----- FOR...OF LOOP -----");
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

console.log("----- FOR...IN LOOP -----");
let student = {
  name: "Dipali",
  age: 21,
  course: "CS"
};
for (let key in student) {
  console.log(key + ":", student[key]);
}

console.log("----- forEach LOOP -----");
let numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num);
});

console.log("----- BREAK & CONTINUE -----");
for (let x = 1; x <= 5; x++) {
  if (x === 3) continue; // skip 3
  if (x === 5) break;    // stop loop
  console.log(x);
}

console.log("----- END OF PROGRAM -----");
const coding=["JavaScript","Python","Java"];
coding.forEach(function (val){
  console.log(val);
})
// coding .forEach((val)=>{
//   console.log(val);
// })
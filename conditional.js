// 1. if statement
let age = 20;
if (age >= 18) {
  console.log("1. if: Eligible to vote");
}

// 2. if-else statement
let marks = 45;
if (marks >= 50) {
  console.log("2. if-else: Pass");
} else {
  console.log("2. if-else: Fail");
}

// 3. else-if ladder
let grade;
if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else {
  grade = "D";
}
console.log("3. else-if: Grade =", grade);

// 4. switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("4. switch: Monday");
    break;
  case 2:
    console.log("4. switch: Tuesday");
    break;
  case 3:
    console.log("4. switch: Wednesday");
    break;
  default:
    console.log("4. switch: Invalid day");
}

// 5. Ternary operator
let result = (age >= 18) ? "Adult" : "Minor";
console.log("5. ternary:", result);

// 6. Logical AND (&&)
let isLoggedIn = true;
isLoggedIn && console.log("6. &&: User is logged in");

// 7. Logical OR (||)
let username = "";
let displayName = username || "Guest";
console.log("7. ||:", displayName);

// 8. Nullish coalescing (??)
let score = null;
let finalScore = score ?? 0;
console.log("8. ??: Final Score =", finalScore);

// 9. Optional chaining (?.)
let user = {};
console.log("9. ?.: City =", user.address?.city);

// 10. try-catch-finally
try {
  let x = y + 10; // y is not defined
} catch (error) {
  console.log("10. try-catch: Error handled");
} finally {
  console.log("10. finally: Program execution finished");
}

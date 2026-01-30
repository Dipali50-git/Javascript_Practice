// ============================================
// JAVASCRIPT DATA TYPES - Comprehensive Guide
// ============================================

// 1. PRIMITIVE DATA TYPES
// ========================

// String - text data enclosed in quotes
let name = "Yogesh";
let city = 'Mumbai';
let message = `Hello, ${name}`; // Template literal
console.log("String:", name, typeof name);

// Number - integer or floating point
let age = 25;
let height = 5.9;
let negativeNum = -100;
console.log("Number:", age, typeof age);

// Boolean - true or false
let isActive = true;
let isLoggedIn = false;
console.log("Boolean:", isActive, typeof isActive);

// Undefined - variable declared but not assigned
let undefinedVar;
console.log("Undefined:", undefinedVar, typeof undefinedVar);

// Null - intentional absence of value
let emptyValue = null;
console.log("Null:", emptyValue, typeof emptyValue); // Note: typeof null returns "object"

// Symbol - unique identifier (ES6)
let sym = Symbol("unique");
console.log("Symbol:", sym, typeof sym);

// BigInt - for very large integers (ES2020)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, typeof bigNumber);

// 2. NON-PRIMITIVE DATA TYPES (OBJECTS)
// =====================================

// Object - collection of key-value pairs
let person = {
  firstName: "Yogesh",
  lastName: "Chavan",
  age: 25,
  isStudent: true
};
console.log("Object:", person, typeof person);

// Array - ordered collection of elements
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null];
console.log("Array:", fruits, typeof fruits); // typeof array returns "object"

// Function - reusable block of code
function greet(name) {
  return `Hello, ${name}!`;
}
let arrowFunc = (x) => x * 2;
console.log("Function:", typeof greet, typeof arrowFunc);

// Date - represents date and time
let today = new Date();
console.log("Date:", today, typeof today);

// 3. TYPE COERCION & CONVERSION
// =============================

// Implicit Coercion
console.log("\n--- Implicit Coercion ---");
console.log("5" + 3); // "53" - string concatenation
console.log("5" - 3); // 2 - numeric operation
console.log(true + 1); // 2 - boolean converted to 1
console.log(null + 5); // 5 - null converted to 0

// Explicit Conversion
console.log("\n--- Explicit Conversion ---");
console.log(String(123)); // "123"
console.log(Number("456")); // 456
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("text")); // true

// 4. CHECKING DATA TYPES
// =======================

let value = 42;
console.log("\n--- Type Checking ---");
console.log(typeof value); // "number"
console.log(value instanceof Number); // false (primitive)
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("not array")); // false

// ========== NUMBER METHODS ==========

// 1. toString() - Convert number to string
const num1 = 123;
console.log(num1.toString()); // "123"
console.log((255).toString(16)); // "ff" (hexadecimal)
console.log((255).toString(2)); // "11111111" (binary)

// 2. toFixed() - Format number with fixed decimal places
const num2 = 123.456;
console.log(num2.toFixed()); // "123"
console.log(num2.toFixed(2)); // "123.46"
console.log(num2.toFixed(4)); // "123.4560"

// 3. toExponential() - Return exponential notation
const num3 = 12345;
console.log(num3.toExponential()); // "1.2345e+4"
console.log(num3.toExponential(2)); // "1.23e+4"

// 4. toPrecision() - Format number to specified precision
const num4 = 123.456;
console.log(num4.toPrecision()); // "123.456"
console.log(num4.toPrecision(5)); // "123.46"
console.log(num4.toPrecision(2)); // "1.2e+2"

// 5. parseInt() - Parse string to integer
console.log(parseInt("10")); // 10
console.log(parseInt("10.5")); // 10
console.log(parseInt("10abc")); // 10
console.log(parseInt("abc")); // NaN
console.log(parseInt("FF", 16)); // 255

// 6. parseFloat() - Parse string to float
console.log(parseFloat("10")); // 10
console.log(parseFloat("10.5")); // 10.5
console.log(parseFloat("10.5abc")); // 10.5

// 7. isNaN() - Check if value is NaN
console.log(isNaN(123)); // false
console.log(isNaN("abc")); // true
console.log(isNaN("123")); // false

// 8. isFinite() - Check if number is finite
console.log(isFinite(123)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false

// 9. Number.isInteger() - Check if value is integer
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.45)); // false
console.log(Number.isInteger("123")); // false

// 10. Number.isSafeInteger() - Check if safe integer
console.log(Number.isSafeInteger(123)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false

// ========== MATH METHODS ==========

// 1. Math.abs() - Absolute value
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

// 2. Math.round() - Round to nearest integer
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.7)); // 5

// 3. Math.ceil() - Round up to nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// 4. Math.floor() - Round down to nearest integer
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4.9)); // 4

// 5. Math.trunc() - Remove decimal part
console.log(Math.trunc(4.1)); // 4
console.log(Math.trunc(-4.9)); // -4

// 6. Math.sign() - Return sign of number (-1, 0, 1)
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1

// 7. Math.pow() - Power (exponent)
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

// 8. Math.sqrt() - Square root
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2)); // 1.414...

// 9. Math.cbrt() - Cube root
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(27)); // 3

// 10. Math.min() - Minimum value
console.log(Math.min(5, 2, 8, 1)); // 1
console.log(Math.min(-5, -2, -8)); // -8

// 11. Math.max() - Maximum value
console.log(Math.max(5, 2, 8, 1)); // 8
console.log(Math.max(-5, -2, -8)); // -2

// 12. Math.random() - Random number between 0 and 1
console.log(Math.random()); // e.g., 0.123456...
console.log(Math.random() * 10); // 0 to 10
console.log(Math.floor(Math.random() * 10)); // 0 to 9

// 13. Math.sin() - Sine (in radians)
console.log(Math.sin(0)); // 0
console.log(Math.sin(Math.PI / 2)); // 1

// 14. Math.cos() - Cosine (in radians)
console.log(Math.cos(0)); // 1
console.log(Math.cos(Math.PI)); // -1

// 15. Math.tan() - Tangent (in radians)
console.log(Math.tan(0)); // 0
console.log(Math.tan(Math.PI / 4)); // 1

// 16. Math.asin() - Arcsine
console.log(Math.asin(0)); // 0
console.log(Math.asin(1)); // Math.PI / 2

// 17. Math.acos() - Arccosine
console.log(Math.acos(0)); // Math.PI / 2
console.log(Math.acos(1)); // 0

// 18. Math.atan() - Arctangent
console.log(Math.atan(0)); // 0
console.log(Math.atan(1)); // Math.PI / 4

// 19. Math.atan2() - Arctangent of y/x
console.log(Math.atan2(1, 1)); // Math.PI / 4

// 20. Math.exp() - e^x
console.log(Math.exp(0)); // 1
console.log(Math.exp(1)); // 2.718... (e)

// 21. Math.log() - Natural logarithm (base e)
console.log(Math.log(1)); // 0
console.log(Math.log(Math.E)); // 1

// 22. Math.log10() - Logarithm base 10
console.log(Math.log10(1)); // 0
console.log(Math.log10(100)); // 2

// 23. Math.log2() - Logarithm base 2
console.log(Math.log2(1)); // 0
console.log(Math.log2(8)); // 3

// ========== MATH CONSTANTS ==========
console.log(Math.PI); // 3.14159...
console.log(Math.E); // 2.71828...
console.log(Math.SQRT2); // 1.41421...
console.log(Math.SQRT1_2); // 0.70710...
console.log(Math.LN2); // 0.69314...
console.log(Math.LN10); // 2.30258...
console.log(Math.LOG2E); // 1.44269...
console.log(Math.LOG10E); // 0.43429...

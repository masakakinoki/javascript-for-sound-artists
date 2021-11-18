"use strict";

//____________________________AND operator

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


//____________________________OR operator

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//____________________________NOT operator


console.log(!false); // true
console.log(!true); // false

console.log(!!false); // false
console.log(!!true); // true
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
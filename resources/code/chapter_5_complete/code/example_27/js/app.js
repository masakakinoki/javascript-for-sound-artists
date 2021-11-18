"use strict";

function calculateFrequencies(a, b, callback) {
    if (callback === undefined) {
        return a * b;
    } else {
        return callback(a, b);
    }
}

function diff(a, b) {
    return Math.abs(a - b);
}

console.log(calculateFrequencies(200, 2)); // 400___Multiplies numbers
console.log(calculateFrequencies(1000, 4000, diff)); // 3000___uses custom callback to find the difference
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBy = countBy;
// Create a function with two arguments that will return an array of the first n multiples of x.
//
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array or list ( depending on language ).
function countBy(x, n) {
    var nums = [];
    for (var i = 1; i <= n; i++) {
        nums.push(x * i);
    }
    return nums;
}
console.log(countBy(2, 5));

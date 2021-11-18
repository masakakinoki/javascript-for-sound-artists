"use strict";

//_______________________________Convert numeric string to number

var numericString = "120";
var num = +numericString; // plus symbol
console.log(num); // 120
console.log(typeof num); // number


//______________________________Convert number to string

var num = 80;
var numericString = num + "";
console.log(numericString); // 80
console.log(typeof numericString); // string





//______________________________________NaN

var osc1 = undefined;
var osc2 = 200;
console.log(osc1 + osc2); // NaN
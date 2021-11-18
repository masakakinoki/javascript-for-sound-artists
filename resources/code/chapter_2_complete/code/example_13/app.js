"use strict";

Math.round(1000.789) // outputs 1001


Math.min(5000, 2000, 80); // 80
Math.max(5000, 2000, 80); // 5000

//___________________________With variables
var freq_1 = 5000;
var freq_2 = 2000;
var freq_3 = 80;
Math.min(freq_1, freq_2, freq_3); // 80
Math.max(freq_1, freq_2, freq_3); // 5000


//__________________________ceil and floor

Math.ceil(3.00333); // 4
Math.floor(3.9999); // 3





//__________________________random


var randomNumber = Math.random();
console.log(randomNumber); // example: 0.019790495047345757

var max = 20000;
var min = 20;
var randomInteger = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomInteger); // Between 20 and 20000



//_________________________Absolute value

var num = Math.abs(-100);
console.log(num); // 100


var a = 1000;
var b = 5000;
console.log(Math.abs(b - a)); // 4000
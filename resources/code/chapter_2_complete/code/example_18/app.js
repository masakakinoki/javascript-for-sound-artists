"use strict";

//___________________________Shift

var synthFrequencies = [5000, 1000, 500];
synthFrequencies.shift();
console.log(synthFrequencies) // [1000, 500];


/*___________________________Shift and capture data


var synthFrequencies = [5000, 1000, 500];
var firstItem = synthFrequencies.shift();
console.log(firstItem); // 5000


*/
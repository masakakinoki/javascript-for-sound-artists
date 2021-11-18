"use strict";


var freqs = [100, 200, 300];
var newFreqs = freqs.map(function(val, index, arr) {
    var message = "current value: " + val + " current index index: " + index + " array: " + arr;
    console.log(message);
    return val;
});

/*___This logs the following to the console
current value: 100 current index: 0 array: 100,200,300
current value: 200 current index: 1 array: 100,200,300
current value: 300 current index: 2 array: 100,200,300
*/